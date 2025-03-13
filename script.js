document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const questions = [
    {
      question: "Coastal Resilience Compendium Tools: Choose an option", // NOT A FOLLOWUP
      answers: [
        { text: "Find the best tool for you", followUp: 1 },
        { 
          text: "View the full table of tools", 
          result: () => window.location.href = "https://example.com/full-table" 
        }
      ]
    },
    {
      question: "Is your shoreline of similar character throughout", // this is followup 1
      answers: [
        { text: "Yes", result: () => window.location.href = "https://example.com/full-table" },
        { text: "No", followUp: 2 },
      ]
    },
    {
      question: "Can you change the underlying zoning?", // this is followup 2
      answers: [
        { text: "Yes", result: () => window.location.href = "https://example.com/full-table" },
        { text: "No", followUp: 3 },
      ]
    },
    {
      question: "Can you change the underlying zoning?", // this is followup 3
      answers: [
        { text: "Yes", result: () => window.location.href = "https://example.com/full-table" },
        { text: "No", followUp: 3 },
      ]
    },    
  ];

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("result-text");
  const backBtn = document.getElementById("back-btn");
  const startOverBtn = document.getElementById("start-over-btn");

  let currentQuestionIndex = 0;
  let history = [];

  function loadQuestion() {
    console.log("Loading question:", currentQuestionIndex);
    const questionData = questions[currentQuestionIndex];
    if (!questionData) {
      console.error("No question found at index", currentQuestionIndex);
      return;
    }

    questionEl.textContent = questionData.question;
    answersEl.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;
      btn.classList.add("answer-btn");
      btn.onclick = () => handleAnswer(answer);
      answersEl.appendChild(btn);
    });

    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    backBtn.style.display = history.length > 0 ? "block" : "none";
    startOverBtn.style.display = "none";  // Hide Start Over button initially
  }

  function handleAnswer(answer) {
    console.log("Button clicked:", answer.text);
    history.push(currentQuestionIndex);

    if (typeof answer.result === "function") {
      answer.result(); // Redirect if it's a function
    } else if (answer.result) {
      showResult(answer.result); // Show result text if it's a string
    } else if (answer.followUp !== undefined) {
      console.log("Follow-up question, moving to index:", answer.followUp);
      currentQuestionIndex = answer.followUp;
      loadQuestion();
    }
  }

  function showResult(result) {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.innerHTML = result;
    backBtn.style.display = "block";
    startOverBtn.style.display = "block";  // Show Start Over button when result is shown
  }

  backBtn.addEventListener("click", function () {
    if (history.length > 0) {
      currentQuestionIndex = history.pop();
      loadQuestion();
    }
  });

  startOverBtn.addEventListener("click", function () {
    history = [];
    currentQuestionIndex = 0;
    loadQuestion();
  });

  loadQuestion();
});
