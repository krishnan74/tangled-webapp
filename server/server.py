from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd 
from sklearn.ensemble import RandomForestClassifier 
from sklearn.preprocessing import LabelEncoder 
from reportlab.lib.pagesizes import letter 
from reportlab.platypus import SimpleDocTemplate, Paragraph 
from reportlab.lib.styles import getSampleStyleSheet 
from reportlab.lib import colors 
from reportlab.lib.units import inch


app = Flask(__name__)

CORS(app, resources={r"/diagnose": {"origins": "http://localhost:3000"}})

# Load the dataset
df = pd.read_csv('foodnutrient.csv')

# Separate features (X) and target (y)
X = df.drop(columns=['Missing or Very Low Nutrient'])
y = df['Missing or Very Low Nutrient']

# Train a Random Forest classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X, y)

# Create a function to predict the missing nutrient based on the food type
def predict_missing_nutrient(food_type, water_content, vitamin_a_quantity, vitamin_b_quantity, vitamin_c_quantity, vitamin_d_quantity, alcohol_content, iron_content, fat_content):
    # Create a sample input dataframe
    
    input_data = pd.DataFrame({
        'Type of Food': [food_type],
        'Water Content (g)': [water_content],  # You can replace this with actual values if available
        'Vitamin A Quantity (mcg)': [vitamin_a_quantity],
        'Vitamin B Quantity (mg)': [vitamin_b_quantity],
        'Vitamin C Quantity (mg)': [vitamin_c_quantity],
        'Vitamin D Quantity (mcg)': [vitamin_d_quantity],
        'Alcohol Content (g)': [alcohol_content],
        'Iron Content (mg)': [iron_content],
        'Fat Content (g)': [fat_content]
    })

    # Predict the missing nutrient
    predicted_nutrient = clf.predict(input_data)

    return predicted_nutrient[0]



@app.route("/", methods=["GET"])
def return_home():
    i = 2323232
    j = 233232323
    k = i * j
    return jsonify({
        "message": k
    })

@app.route("/diagnose", methods=["GET", "POST"])
def get_patient_data():
    if request.method == "POST":
        # Get the JSON data sent from the client
        data = request.get_json()

        # Access individual form fields
        food_type = data["foodType"]
        water_content = data["waterContent"]
        vitamin_a_quantity = data["vitaminAQuantity"]
        vitamin_b_quantity = data["vitaminBQuantity"]
        vitamin_c_quantity = data["vitaminCQuantity"]
        vitamin_d_quantity = data["vitaminDQuantity"]
        alcohol_content = data["alcoholContent"]
        iron_content = data["ironContent"]
        fat_content = data["fatContent"]

        predicted_nutrient = predict_missing_nutrient(food_type, water_content, vitamin_a_quantity, vitamin_b_quantity, vitamin_c_quantity, vitamin_d_quantity, alcohol_content, iron_content, fat_content)

        # Perform any processing on the data here

        # Return a response (for example, a confirmation message)
        return jsonify({
            "message": "Form data received successfully",
            "foodType": food_type,
            "waterContent": water_content,
            "vitaminAQuantity": vitamin_a_quantity,
            "vitaminBQuantity": vitamin_b_quantity,
            "vitaminCQuantity": vitamin_c_quantity,
            "vitaminDQuantity": vitamin_d_quantity,
            "alcoholContent": alcohol_content,
            "ironContent": iron_content,
            "fatContent": fat_content,
            "result": predicted_nutrient
        })
    
    else:
        # This is a GET request, return a message indicating it's not supported
        return jsonify({
            "message": "GET request not supported for this route"
        })


if __name__ == "__main__":
    app.run(debug=True, port=8080)
