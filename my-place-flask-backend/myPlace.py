from flask import Flask

app = Flask(__name__)


@app.route("/")
def initialize_myPlace():
    return "<p>Now running myPlace! </p>"
