document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

const questions = [
    {
        question: "Coastal Resilience Compendium Tools: Choose an option",
        answers: [
            { text: "Find the best tool for me", followUp: 1 },
            { text: "View the full list of tools", result: () => window.open("https://www.planningmi.org/aws/MAP/pt/sp/cscss", "_blank") }
        ]
    },
    {
        question: "Is your shoreline of similar character throughout?", // Follow-up 1
        answers: [
          { text: "Yes", result: "<a href='https://www.planningmi.org/aws/MAP/pt/sp/cscgi'<strong>Shoreline setbacks</strong><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool."; } },
          { text: "No", followUp: 2 }
        ]
    },
    {
        question: "Can you change the underlying zoning?", // Follow-up 2
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Shoreline overlay district</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 3 }
        ]
    },
    {
        question: "Do you anticipate new development or redevelopment?", // Follow-up 3
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Shoreline district</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 4 }
        ]
    },
    {
        question: "Does development already exist?", // Follow-up 4
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Floodplain overlay district</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 5 }
        ]
    },
    {
        question: "Do you have floodplains?", // Follow-up 5
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Land division regulations</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 6 }
        ]
    },
    {
        question: "Is your property at risk of erosion?", // Follow-up 6
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Bluff protections</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 7 }
        ]
    },
    {
        question: "Are you hearing from property owners that they want to protect their property?", // Follow-up 7
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Armoring prohibition</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 8 }
        ]
    },
    {
        question: "Is this a specific shoreline use like a marina?", // Follow-up 8
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Special shoreline uses</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 9 }
        ]
    },
    {
        question: "Are you looking to affect a district?", // Follow-up 9
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>Natural features setbacks</a><br>" +
              "<a href='https://example.com'>Open space requirements</a><br>" +
              "<a href='https://example.com'>Temporary shoreline protections (sandbags, geotubes)</a><br>" +  
              "<a href='https://example.com'>Natural shoreline requirements</a><br><br>" +
              "Click the hyperlink above to learn more <strong>OR</strong><br>" +
              "click 'Back' and choose 'No' to find a different tool."  },
            { text: "No", followUp: 10 }
        ]
    },
    {
        question: "Are you looking to affect a site?", // Follow-up 10
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Retreat/building moving standards</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 11 }
        ]
    },
    {
        question: "Do you have capacity and/or desire to implement and review discretionary standards?", // Follow-up 11
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Design guidelines</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 12 }
        ]
    },
    {
        question: "Do you have existing development that doesn't meet the standards you have?", // Follow-up 12
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Nonconformities and variance standard</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 13 }
        ]
    },
    {
        question: "Do you have lots of record?", // Follow-up 13
        answers: [
            { text: "Yes", result: "<a href='https://example.com'>PUDs and cluster development</a><br>" +
              "<a href='https://example.com'>Site condos</a><br>" +
              "<a href='https://example.com'>Platting review</a><br><br>" +
              "<a href='https://example.com'>Long lots</a><br>" +
              "Click the hyperlink above to learn more <strong>OR</strong><br>" +
              "click 'Back' and choose 'No' to find a different tool."  },
            { text: "No", followUp: 14 }
        ]
    },
    {
        question: "Do you have wetlands?", // Follow-up 14
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Wetlands protection</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 15 }
        ]
    },
    {
        question: "Do you have dunes?", // Follow-up 15
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Dune protection</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 16 }
        ]
    },
    {
        question: "Do you have bluffs?", // Follow-up 16
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Bluff protection</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 17 }
        ]
    },
    {
        question: "Do you have sensitive environmental areas?", // Follow-up 17
        answers: [
            { text: "Yes", result: "<a href='https://example.com'><strong>Sensitive environmental areas protection</strong></a><br><br>Click the hyperlink above to learn more.<br><br><strong>Not a good solution for you?</strong> Click 'Back' and choose 'No' to find a different tool." },
            { text: "No", followUp: 18 }
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

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const questionContainer = document.getElementById("question-container");

    const questionText = `Coastal Resilience Compendium Tools: <br>Choose an option`;

    questionContainer.innerHTML = questionText; // Renders <br> as a line break
});
