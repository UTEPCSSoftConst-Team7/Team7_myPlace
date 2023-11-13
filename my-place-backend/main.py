from flask_cors import CORS
from flask import Flask, jsonify, request

# creating the Flask application
app = Flask(__name__)
CORS(app)

