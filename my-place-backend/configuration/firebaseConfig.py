import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("team7-myplace-firebase-adminsdk-qwgws-1742b9b7d3.json")
firebase_admin.initialize_app(cred)
