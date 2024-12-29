let selectedLanguage = "";

function selectLanguage(language) {
    selectedLanguage = language;
    document.getElementById("selected-language").innerText = `Selected Language: ${language}`;
    document.getElementById("input-container").style.display = "block";
    document.getElementById("result").innerText = "";
}

async function count() {
    const number = document.getElementById("number-input").value;
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    if (!number || isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    loading.style.display = "block";
    loading.textContent = "Counting in progress...";
    result.innerText = "";

    try {
        const response = await fetch("/count", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `language=${encodeURIComponent(selectedLanguage)}&number=${encodeURIComponent(number)}`,
        });
        const data = await response.json();

        loading.style.display = "none";

        if (response.ok) {
            result.innerText = `Time taken: ${data.time.toFixed(6)} seconds.`;
        } else {
            result.innerText = `Error: ${data.error}`;
        }
    } catch (error) {
        console.error("Fetch error:", error); // Debug network error
        loading.style.display = "none";
        result.innerText = "An error occurred. Please try again.";
    }
}

function animateLoadingText() {
    const loadingText = document.getElementById("loading");
    const text = "Counting in progress... Please wait.";

    // Clear and split into individual characters
    loadingText.innerHTML = "";
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space for spaces
        span.classList.add("letter");
        loadingText.appendChild(span);

        // Add animation for yellow
        setTimeout(() => {
            span.classList.add("letter-yellow");
        }, index * 100);

        // Add animation for green
        setTimeout(() => {
            span.classList.remove("letter-yellow");
            span.classList.add("letter-green");
        }, text.length * 100 + index * 100);
    });
}
