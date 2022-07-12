import React from "react";
import "./quizz.css";
const Quizz = () => {
  const questions = [
    {
      question: "The answer is really big. ?",
      optionA: "THE ANSWER.",
      optionB: "Really big.",
      optionC: "An elephant.",
      optionD: "The data given is insufficient.",
      correctOption: "optionA",
    },

    {
      question:
        "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?",
      optionA: "1st",
      optionB: "2nd",
      optionC: "3rd",
      optionD: "None of the above.",
      correctOption: "optionA",
    },

    {
      question:
        "How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long? ?",
      optionA: "1",
      optionB: "25",
      optionC: "39",
      optionD: "None of the above",
      correctOption: "optionA",
    },

    {
      question: "30 days has ______ ?",
      optionA: "January",
      optionB: "December",
      optionC: "June",
      optionD: "August",
      correctOption: "optionC",
    },

    {
      question:
        "They fly at night, you'd better run. These winged things are not much fun.?",
      optionA: "Birds",
      optionB: "Eagles",
      optionC: "Witches",
      optionD: "Bats",
      correctOption: "optionD",
    },

    {
      question: "Divide 30 by half and add ten. ?",
      optionA: "40.5",
      optionB: "50",
      optionC: "70",
      optionD: "NONE",
      correctOption: "optionC",
    },

    {
      question:
        "A little bite will make you itch, make you sneeze, make you twitch.?",
      optionA: "Hamburgers",
      optionB: "Ant",
      optionC: "Mosquito",
      optionD: "Nick",
      correctOption: "optionC",
    },

    {
      question:
        "A farmer has 17 sheep, all of them but 8 die. How many sheep are still standing? ?",
      optionA: "8",
      optionB: "9",
      optionC: "25",
      optionD: "35",
      correctOption: "optionA",
    },

    {
      question: "Which of these numbers is an odd number ?",
      optionA: "Ten",
      optionB: "Twelve",
      optionC: "Eight",
      optionD: "Eleven",
      correctOption: "optionD",
    },

    {
      question: `"You Can't see me" is a popular saying by`,
      optionA: "Eminem",
      optionB: "Bill Gates",
      optionC: "Chris Brown",
      optionD: "John Cena",
      correctOption: "optionD",
    },

    {
      question: "Where is the world tallest building located ?",
      optionA: "Africa",
      optionB: "California",
      optionC: "Dubai",
      optionD: "Italy",
      correctOption: "optionC",
    },

    {
      question: "His fangs are sharp, he likes your taste.?",
      optionA: "Lion",
      optionB: "Mosquito",
      optionC: "Vampire",
      optionD: "Bat",
      correctOption: "optionA",
    },

    {
      question: "How many permanent teeth does a dog have ?",
      optionA: "38",
      optionB: "42",
      optionC: "40",
      optionD: "36",
      correctOption: "optionB",
    },

    {
      question:
        "They grow much faster than bamboo. Take care or they'll come after you.?",
      optionA: "Ants",
      optionB: "Palm",
      optionC: "Tree",
      optionD: "Plants",
      correctOption: "optionD",
    },

    {
      question:
        "Need a hand, well you just wait. We'll lend a hand, we each have eight.?",
      optionA: "Ants",
      optionB: "Spiders",
      optionC: "Octopuses",
      optionD: "Roaches",
      correctOption: "optionB",
    },

    {
      question: "How many months have 28 days??",
      optionA: "2",
      optionB: "1",
      optionC: "All of them.",
      optionD: "Depends if there's a leap year or not.",
      correctOption: "optionC",
    },

    {
      question:
        "There are 45 apples in your basket. You take three apples out of the basket. How many apples are left?",
      optionA: "3",
      optionB: "42",
      optionC: "45",
      optionD: "I do not eat apple!",
      correctOption: "optionC",
    },

    {
      question: "Los Angeles is also known as ?",
      optionA: "Angels City",
      optionB: "Shining city",
      optionC: "City of Angels",
      optionD: "Lost Angels",
      correctOption: "optionC",
    },

    {
      question:
        "Beware the ground on which you stand. The floor is quicker than the sand.",
      optionA: "Ocean",
      optionB: "Ground",
      optionC: "Storm",
      optionD: "Quicksand",
      correctOption: "optionD",
    },

    {
      question: "How many sides does an hexagon have ?",
      optionA: "Six",
      optionB: "Sevene",
      optionC: "Four",
      optionD: "Five",
      correctOption: "optionA",
    },

    {
      question: "How many planets are currently in the solar system ?",
      optionA: "Eleven",
      optionB: "Seven",
      optionC: "Nine",
      optionD: "Eight",
      correctOption: "optionD",
    },

    {
      question: "Which Planet is the hottest ?",
      optionA: "Jupitar",
      optionB: "Mercury",
      optionC: "Earth",
      optionD: "Venus",
      correctOption: "optionB",
    },

    {
      question: "where is the smallest bone in human body located?",
      optionA: "Toes",
      optionB: "Ears",
      optionC: "Fingers",
      optionD: "Nose",
      correctOption: "optionB",
    },

    {
      question: "How many hearts does an Octopus have ?",
      optionA: "One",
      optionB: "Two",
      optionC: "Three",
      optionD: "Four",
      correctOption: "optionC",
    },

    {
      question: "How many teeth does an adult human have ?",
      optionA: "28",
      optionB: "30",
      optionC: "32",
      optionD: "36",
      correctOption: "optionC",
    },
  ];

  let shuffledQuestions = [];

  function handleQuestions() {
    while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)];
      if (!shuffledQuestions.includes(random)) {
        shuffledQuestions.push(random);
      }
    }
  }

  let questionNumber = 1;
  let playerScore = 0;
  let wrongAttempt = 0;
  let indexNumber = 0;

  function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML =
      currentQuestion.question;
    document.getElementById("option-one-label").innerHTML =
      currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML =
      currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML =
      currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML =
      currentQuestion.optionD;
  }

  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
        correctOption = option.labels[0].id;
      }
    });

    if (
      options[0].checked === false &&
      options[1].checked === false &&
      options[2].checked === false &&
      options[3].checked === false
    ) {
      document.getElementById("option-modal").style.display = "flex";
    }

    options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "green";
        playerScore++;
        indexNumber++;

        setTimeout(() => {
          questionNumber++;
        }, 1000);
      } else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id;
        document.getElementById(wrongLabelId).style.backgroundColor = "red";
        document.getElementById(correctOption).style.backgroundColor = "green";
        wrongAttempt++;
        indexNumber++;
        setTimeout(() => {
          questionNumber++;
        }, 1000);
      }
    });
  }

  function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
      if (indexNumber <= 9) {
        NextQuestion(indexNumber);
      } else {
        handleEndGame();
      }
      resetOptionBackground();
    }, 1000);
  }

  function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
  }

  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  }

  function handleEndGame() {
    let remark = null;
    let remarkColor = null;

    if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing.";
      remarkColor = "red";
    } else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average Grades, You can do better.";
      remarkColor = "orange";
    } else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going.";
      remarkColor = "green";
    }
    const playerGrade = (playerScore / 10) * 100;

    document.getElementById("remarks").innerHTML = remark;
    document.getElementById("remarks").style.color = remarkColor;
    document.getElementById("grade-percentage").innerHTML = playerGrade;
    document.getElementById("wrong-answers").innerHTML = wrongAttempt;
    document.getElementById("right-answers").innerHTML = playerScore;
    document.getElementById("score-modal").style.display = "flex";
  }

  function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber);
    document.getElementById("score-modal").style.display = "none";
  }

  function closeOptionModal() {
    document.getElementById("option-modal").style.display = "none";
  }
  return (
    <div>
      <body onload="NextQuestion(0)">
        <main>
          <div class="modal-container" id="score-modal">
            <div class="modal-content-container">
              <h1>Congratulations, Quiz Completed.</h1>

              <div class="grade-details">
                <p>Attempts : 10</p>
                <p>
                  Wrong Answers : <span id="wrong-answers"></span>
                </p>
                <p>
                  Right Answers : <span id="right-answers"></span>
                </p>
                <p>
                  Grade : <span id="grade-percentage"></span>%
                </p>
                <p>
                  <span id="remarks"></span>
                </p>
              </div>

              <div class="modal-button-container">
                <button onclick="closeScoreModal()">Continue</button>
              </div>
            </div>
          </div>

          <div class="game-quiz-container">
            <div class="game-details-container">
              <h1>
                Score : <span id="player-score"></span> / 10
              </h1>
              <h1>
                Question : <span id="question-number"></span> / 10
              </h1>
            </div>

            <div class="game-question-container">
              <h1 id="display-question">Quest</h1>
            </div>

            <div class="game-options-container">
              <div class="modal-container" id="option-modal">
                <div class="modal-content-container">
                  <h1>Please Pick An Option</h1>

                  <div class="modal-button-container">
                    <button onclick="closeOptionModal()">Continue</button>
                  </div>
                </div>
              </div>

              <span>
                <input
                  type="radio"
                  id="option-one"
                  name="option"
                  class="radio"
                  value="optionA"
                />
                <label
                  for="option-one"
                  class="option"
                  id="option-one-label"
                ></label>
              </span>

              <span>
                <input
                  type="radio"
                  id="option-two"
                  name="option"
                  class="radio"
                  value="optionB"
                />
                <label
                  for="option-two"
                  class="option"
                  id="option-two-label"
                ></label>
              </span>

              <span>
                <input
                  type="radio"
                  id="option-three"
                  name="option"
                  class="radio"
                  value="optionC"
                />
                <label
                  for="option-three"
                  class="option"
                  id="option-three-label"
                ></label>
              </span>

              <span>
                <input
                  type="radio"
                  id="option-four"
                  name="option"
                  class="radio"
                  value="optionD"
                />
                <label
                  for="option-four"
                  class="option"
                  id="option-four-label"
                ></label>
              </span>
            </div>

            <div class="next-button-container">
              <button onclick="handleNextQuestion()">Next Question</button>
            </div>
          </div>
        </main>
        <script src="index.js"></script>
      </body>
    </div>
  );
};

export default Quizz;
