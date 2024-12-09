import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("API_KEY")
if not api_key:
    raise ValueError("API_KEY not found. Please check your .env file.")

genai.configure(api_key=api_key)

version = 'models/gemini-1.5-pro'
model = genai.GenerativeModel(version)

# Function to generate content based on user input
def generate_content_for_age(age):
    prompt = f"Generate 5 questions with 5 options for someone of age {age} years on AI in json format."
    response = model.generate_content(prompt)
    return response.text

# Function to generate tailored ML learning content
def generate_ml_learning_content(age):
    prompt = f"Create an interactive ML learning module for a {age}-year-old, including visuals and quizzes."
    response = model.generate_content(prompt)
    return response.text

# Example usage: Generate content for a specific age
age = 16  # You can change this value based on user input
generated_response = generate_content_for_age(age)
print("Generated Questions:", generated_response)

# Generate tailored ML learning content
learning_content = generate_ml_learning_content(age)
print("Generated Learning Content:", learning_content)
