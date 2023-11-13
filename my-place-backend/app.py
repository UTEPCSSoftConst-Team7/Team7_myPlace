from flask import Flask
from flask_cors import CORS
from config.FirebaseManager import FirebaseManager

firebase_manager = FirebaseManager()
app = Flask(__name__)
CORS(app) # This will enable CORS for all routes


@app.route("/")
def run_backend():
    return "<p>myPlace backend service running</p>"
