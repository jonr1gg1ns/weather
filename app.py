print("Starting Flask application...")
from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/weather', methods=['GET'])
def weather():
    city = request.args.get('city')
    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=metric&key=AZ5P5AQMWTBHZN7WYPYJMRNWZ&contentType=json"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({"error": "City not found"}), 404
    
if __name__ == '__main__':
    app.run(debug=True)