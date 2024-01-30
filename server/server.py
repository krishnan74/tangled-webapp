from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import pandas as pd 
from sklearn.ensemble import RandomForestClassifier 
import matplotlib.pyplot as plt
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from sklearn.preprocessing import LabelEncoder 
from reportlab.lib.pagesizes import letter 
from reportlab.platypus import SimpleDocTemplate, Paragraph 
from reportlab.lib.styles import getSampleStyleSheet 
from reportlab.lib import colors 
from langchain_community.utilities import WikipediaAPIWrapper
from reportlab.lib.units import inch
from io import BytesIO
import os


app = Flask(__name__)

CORS(app, resources={r"/chatbot": {"origins": "http://localhost:3000"}})

@app.route("/chatbot", methods=["POST"])
def chatbot():
    if request.method == "POST":
        # Get the JSON data sent from the client
        data = request.get_json()

        # Access individual form fields
        prompt = data["prompt"]
        wikipedia = WikipediaAPIWrapper()
        response_text = wikipedia.run(prompt)

        response_text = response_text.split(':', 2)[-1].strip()

        return jsonify({"text": response_text})
        
    
    else:
        # This is a GET request, return a message indicating it's not supported
        return jsonify({
            "message": "GET request not supported for this route"
        })


if __name__ == "__main__":
    app.run(debug=True, port=8080)
