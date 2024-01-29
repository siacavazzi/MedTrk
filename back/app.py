from flask_restful import Api, Resource 
from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from lib.models import db, User
from datetime import date
from flask_bcrypt import Bcrypt
from flask_cors import CORS


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db.init_app(app)
bcrypt = Bcrypt(app)
api = Api(app)
migrate = Migrate(app, db)
connected_clients = {}
CORS(app, supports_credentials=True,resources={r"/*": {"origins": "http://localhost:3000"}})

def current_user():
    user = User.query.filter(User.id == session.get('user_id')).first()
    return user

# checks cookies to see if user has previously logged in
@app.get('/check_session')
def check_session():
    user = current_user()
    print(user)
    if user:
        return jsonify(user.secure_dict()), 200
    else:
        return {'message':'No user found'}, 400


@app.post('/login')
def login():
    try:
        json = request.json
        user = User.query.filter(User.email == json["email"]).first()
            
        if user and bcrypt.check_password_hash(user.pass_hash, json["password"]):
            session["user_id"] = user.id
            print(session.get('user_id'))
            return user.secure_dict(), 200
        else:
            return {"error":"Incorrect login information. Please try again."}
    except Exception as e:
        return {"error":str(e)}

@app.route('/logout', methods=['GET'])
def logout():
    user_id = session.pop('user_id', None)
    if user_id is not None:
        # User was logged in and is now logged out
        return jsonify({"message": "User logged out successfully."}), 200
    else:
        # User was not logged in
        print("User not logged in")
        return jsonify({"error": "No user was logged in."}), 400



# RESTful api for user accounts
class Users(Resource):
    def post(self):
        try:
            json = request.json
        # check if the email is already in the db
            user_with_same_email = User.query.filter(User.email == json['email']).first()
            print(user_with_same_email)
            print("This user already exists")
            if user_with_same_email:
                return {"error":"Email already in use. Please try a different email."}
        
            pw_hash = bcrypt.generate_password_hash(json['password']).decode('utf-8')
            new_user = User(email = json['email'], pass_hash=pw_hash, fname=json['fname'], lname=json['lname'], creation_date=date.today())
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id

            return new_user.secure_dict(), 201
        except Exception as e:
            return { 'error': str(e)}, 500
        
    def get(self):
        try:
            json = request.json
            user = User.query.filter(User.email == json["email"]).first()
            
            if user and bcrypt.check_password_hash(user.pass_hash, json["password"]):
                return user.to_dict(), 202
            else:
                return {"error":"Incorrect email or password."}
        except Exception as e:
            return {"error":str(e)}
        
    def delete(self):
        try:
            json = request.json
            user = User.query.filter(User.email == json["email"]).first()

            if not user:
                return {"error":"user does not exist"}
            db.session.delete(user)
            db.session.commit()
            return {"message": "user deleted"}, 200

        except Exception as e:
            return { 'error': str(e)}, 500
            
api.add_resource(Users, '/users')
        
if __name__ == "__main__":
    print("App started...")
    app.run(port=5555)