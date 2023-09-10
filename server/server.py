from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/", methods = ["GET"])

def return_home():
    i = 2323232
    j = 233232323
    k = i*j
    return jsonify({
        "message": k
        
    })

if __name__ == "__main__":
    app.run(debug=True, port = 8080)