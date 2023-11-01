from flask import Flask


app = Flask(__name__)


@app.route("/")
def run_backend():
    return "<p>myPlace backend service running</p>"
