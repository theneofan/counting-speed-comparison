from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

# Simulated counting functions
def count_in_python(n):
    start_time = time.perf_counter()
    time.sleep(n * 0.000001)
    end_time = time.perf_counter()
    return end_time - start_time

def count_in_c(n):
    start_time = time.perf_counter()
    time.sleep(n * 0.0000008)
    end_time = time.perf_counter()
    return end_time - start_time

def count_in_javascript(n):
    start_time = time.perf_counter()
    time.sleep(n * 0.0000012)
    end_time = time.perf_counter()
    return end_time - start_time

# Language-to-function mapping
COUNTING_FUNCTIONS = {
    "Python": count_in_python,
    "C": count_in_c,
    "JavaScript": count_in_javascript,
}

@app.route("/")
def index():
    """Render the main HTML page."""
    languages = list(COUNTING_FUNCTIONS.keys())
    return render_template("index.html", languages=languages)

@app.route("/count", methods=["POST"])
def count():
    """Process the count request."""
    try:
        language = request.form.get("language")
        number = request.form.get("number")
        print(f"Received: language={language}, number={number}")  # Debug log

        if not language or not number:
            return jsonify({"error": "Invalid input."}), 400

        number = int(number)

        if language in COUNTING_FUNCTIONS:
            time_taken = COUNTING_FUNCTIONS[language](number)
            return jsonify({"time": time_taken})
        else:
            return jsonify({"error": "Unsupported language."}), 400
    except Exception as e:
        print(f"Error: {str(e)}")  # Log error for debugging
        return jsonify({"error": f"Internal error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
