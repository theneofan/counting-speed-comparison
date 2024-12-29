# Counting Speed Comparison
#### Video Demo:  <https://youtu.be/o8HCCOIlIPQ>
#### Description:
# Counting Speed Comparison

A simple Flask web application designed to simulate and compare the counting speeds of **Python**, **C**, and **JavaScript**. Users can select a programming language, input a number, and see how long it would theoretically take to "count" to that number using simulated processing times for each language.

---

## Features

- **Language Selection:** Choose between Python, C, and JavaScript to compare their performance.
- **Input Validation:** Ensures that users provide a valid number to count.
- **Dynamic Feedback:** Displays a "please wait" animation while the counting is simulated.
- **Results Display:** Shows the time taken for the selected language to complete the counting task.

---

## Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Simulated Processing:** Python logic to mimic counting speeds for each language.

---

## How It Works

1. **Language Simulation:**
    - The app uses predefined multipliers to simulate counting speeds for Python, C, and JavaScript.
    - Example: C is simulated to be faster than Python and JavaScript based on arbitrary multipliers.

2. **User Interaction:**
    - The user selects a language and enters a large number.
    - The backend simulates the counting process and returns the time taken.

3. **Result Display:**
    - The app calculates the simulated time and displays it on the screen.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/theneofan/counting-speed-comparison.git
    cd counting-speed-comparison
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask app:
    ```bash
    python app.py
    ```

4. Open your browser and navigate to:
    ```
    http://127.0.0.1:5000/
    ```

---

## Usage

1. Select a programming language (Python, C, or JavaScript).
2. Input a large number to count to.
3. Click **Count** to see the simulated time taken by the selected language.
4. Observe the results displayed on the screen.

---


