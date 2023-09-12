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
from reportlab.lib.units import inch
from io import BytesIO
import os


app = Flask(__name__)

CORS(app, resources={r"/diagnose": {"origins": "http://localhost:3000"}})

df = pd.read_csv("foodnutrient.csv")

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
        'Water Content (g)': [34.11377924],  # You can replace this with actual values if available
        'Vitamin A Quantity (mcg)': [897.3490418],
        'Vitamin B Quantity (mg)': [1.789735275],
        'Vitamin C Quantity (mg)': [24.96633556],
        'Vitamin D Quantity (mcg)': [0.067596558],
        'Alcohol Content (g)': [2.33282825],
        'Iron Content (mg)': [2.98175448],
        'Fat Content (g)': [1.050918851]
    })

    # Predict the missing nutrient
    predicted_nutrient = clf.predict(input_data)

    return predicted_nutrient[0]

def savepdf(predicted_nutrient):
    pdf_filename = "nutrition_report.pdf"
    output_dir = "F:/programming/tangled-webapp/client/public/"
    image_filename = os.path.join(output_dir, "sample_graph.png")

    c = canvas.Canvas(pdf_filename, pagesize=letter)
    c.setFont("Helvetica", 12)
    c.drawString(100, 750, "Nutrition Report")

    # Display predicted nutrient
    c.drawString(100, 720, f"Based on the selected food type, the missing or very low nutrient may be: {predicted_nutrient}")

    # Suggest extent and treatment based on the predicted missing nutrient
    if predicted_nutrient == 'Fiber':
        disease = 'Hunger Pangs, Constipation, Diarrhea, Overweight, Obesity, Diabetes'
        treatment = 'Consume fiber-rich foods such as berries, cruciferous vegetables, oats, chia seeds, and dark chocolate'
    elif predicted_nutrient == 'Vitamin D':
        disease = 'Rickets, Osteoporosis, Metabolic disorders, Bone weakness'
        treatment = 'Consume Vitamin D-rich food such as dairy products, oranges, fatty fish, fish liver oils'
    elif predicted_nutrient == 'Vitamin B6':
        disease = 'Peripheral neuropathy, Pellagra, Seizures, Anemia'
        treatment = 'Consume Vitamin B6-rich food such as fish, chicken, tofu, pork, beef, bananas'
    elif predicted_nutrient == 'Iron':
        disease = 'Anemia'
        treatment = 'Consume Iron-rich food such as spinach, tofu, lentils, red meat, liver'
    elif predicted_nutrient == 'Fats':
        disease = 'Dermatitis, Weak immunity, Colon Cancer, Heart disease'
        treatment = 'Consume Fats-rich food such as avocados, cheese, eggs, nuts, chia seeds'
    elif predicted_nutrient == 'Protein':
        disease = 'Weak muscles, Edema, Hormone imbalances, Marasmus'
        treatment = 'Consume Protein-rich food such as eggs, beans, chicken, lentils'
    else:
        disease = 'Not diagnosed'
        treatment = 'No specific treatment recommended'

    # Display possible anomalies and food intake recommendations
    c.drawString(100, 690, f'The possible anomalies are: {disease}')
    c.drawString(100, 670, f'Food intake: {treatment}')

    # Create a sample graph (you can replace this with your actual graph)
    plt.figure(figsize=(6, 4))
    plt.bar(['A', 'B', 'C', 'D'], [10, 5, 20, 8])
    plt.title("Nutritional Analysis")
    plt.xlabel("Vitamins")
    plt.ylabel("Values")
    plt.savefig(image_filename)

    # Insert the graph into the PDF
    c.drawImage("sample_graph.png", 100, 450, width=300, height=200)

    # Save the PDF report
    c.save()

    return pdf_filename


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

        pdf_path = savepdf(predicted_nutrient)

        return jsonify({
            "path" : "sample_graph.png"
        })
        
        # Perform any processing on the data here
    
    else:
        # This is a GET request, return a message indicating it's not supported
        return jsonify({
            "message": "GET request not supported for this route"
        })


if __name__ == "__main__":
    app.run(debug=True, port=8080)
