from flask_restful import Api, Resource 
from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
#db.init_app(app)
#bcrypt = Bcrypt(app)
api = Api(app)
#migrate = Migrate(app, db)

