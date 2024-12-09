from flask import Flask, request, jsonify
from src.utils.aiLearningContent import generate_content_for_age, generate_ml_learning_content

app = Flask(__name__)

@app.route('/generate-questions', methods=['POST'])
def generate_questions():
    data = request.json
    age = data.get('age')
    if age is None:
        return jsonify({"error": "Age is required"}), 400
    
    questions = generate_content_for_age(age)
    return jsonify({"questions": questions})

@app.route('/generate-learning-content', methods=['POST'])
def generate_learning_content():
    data = request.json
    age = data.get('age')
    if age is None:
        return jsonify({"error": "Age is required"}), 400
    
    learning_content = generate_ml_learning_content(age)
    return jsonify({"learning_content": learning_content})

if __name__ == '__main__':
    app.run(debug=True)