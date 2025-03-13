document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

const questions = [
    {
        question: "Coastal Resilience Compendium Tools: <p>Choose an option</p>",
        answers: [
            { text: "Find the best tool for me", followUp: 1 },
            { text: "View the full table of tools", result: () => window.location.href = "https://example.com/full-table" }
        ]
    },
    {
        question: "Is your shoreline of similar character throughout?", // Follow-up 1
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Shoreline setbacks</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 2 }
        ]
    },
    {
        question: "Can you change the underlying zoning?", // Follow-up 2
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Shoreline overlay district</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 3 }
        ]
    },
    {
        question: "Do you anticipate new development or redevelopment?", // Follow-up 3
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Shoreline district</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 4 }
        ]
    },
    {
        question: "Does development already exist?", // Follow-up 4
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Floodplain overlay district</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 5 }
        ]
    },
    {
        question: "Do you have floodplains?", // Follow-up 5
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Land division regulations</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 6 }
        ]
    },
    {
        question: "Is your property at risk of erosion?", // Follow-up 6
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Bluff protections</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 7 }
        ]
    },
    {
        question: "Are you hearing from property owners that they want to protect their property?", // Follow-up 7
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Armoring prohibition</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 8 }
        ]
    },
    {
        question: "Is this a specific shoreline use like a marina?", // Follow-up 8
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Special shoreline uses</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 9 }
        ]
    },
    {
        question: "Are you looking to affect a district?", // Follow-up 9
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Natural features setbacks</a><br>" +
          "<a href='https://example.com'>Open space requirements</a><br>" +
          "<a href='https://example.com'>Temporary shoreline protections (sandbags, geotubes)</a><br><br>" +  
          "<a href='https://example.com'>Natural shoreline requirements</a><br><br>" +
          "Click the hyperlink above to learn more <strong>OR</strong><br>" +
          "click 'Back' and choose 'No' to find a different tool."  },
          { text: "No", followUp: 10 }
        ]
    },
    {
        question: "Are you looking to affect a site?", // Follow-up 10
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Retreat/building moving standards</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 11 }
        ]
    },
    {
        question: "Do you have capacity and/or desire to implement and review discretionary standards?", // Follow-up 11
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Design guidelines</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 12 }
        ]
    },
    {
        question: "Do you have existing development that doesn't meet the standards you have?", // Follow-up 12
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Nonconformities and variance standard</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 13 }
        ]
    },
    {
        question: "Do you have lots of record?", // Follow-up 13
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>PUDs and cluster development</a><br>" +
          "<a href='https://example.com'>Site condos</a><br>" +
          "<a href='https://example.com'>Platting review</a><br><br>" +
          "<a href='https://example.com'>Long lots</a><br><br>" +
          "Click the hyperlink above to learn more <strong>OR</strong><br>" +
          "click 'Back' and choose 'No' to find a different tool."  },
            { text: "No", followUp: 14 }
        ]
    },
    {
        question: "Do you have wetlands?", // Follow-up 14
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Wetlands protection</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 15 }
        ]
    },
    {
        question: "Do you have dunes?", // Follow-up 15
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Dune protection</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 16 }
        ]
    },
    {
        question: "Do you have bluffs?", // Follow-up 16
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Bluff protection</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 17 }
        ]
    },
    {
        question: "Do you have sensitive environmental areas?", // Follow-up 17
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Sensitive environmental areas protection</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 18 }
        ]
    },
      {
        question: "Do you have high-risk erosion areas?", // Follow-up 18
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>High-risk erosion area protection</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 19 }
        ]
    },
      {
        question: "Are you concerned about flooding?", // Follow-up 19
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Vegetation requirement</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 20 }
        ]
    },
      {
        question: "Are you concerned about water quality?", // Follow-up 20
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Stormwater management and/or green infrastructure</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 21 }
        ]
    },
      {
        question: "Is it a priority to preserve or create access?", // Follow-up 21
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Impervious surface standards</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 22 }
        ]
    },
      {
        question: "Do you have sensitive, constantly evolving environmental areas?", // Follow-up 22
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Dynamic zoning</a><br><br>Click the hyperlink above to learn more <strong>OR</strong><br>click 'Back' and choose 'No' to find a different tool." },
            { text: "No", result: () => window.location.href = "https://example.com/full-table" }
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
