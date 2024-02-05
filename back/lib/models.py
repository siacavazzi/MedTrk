from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
#from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model):
    __tablename__ = "users"
    
    def __repr__(self):
        return f"User {self.fname}, {self.lname}. ID: {self.id}"

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String)
    fname = db.Column(db.String)
    lname = db.Column(db.String)
    pass_hash = db.Column(db.String)
    creation_date = db.Column(db.Date)

    def secure_dict(self):
        return {"id":self.id,"email":self.email,"fname":self.fname,"lname":self.lname}