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

let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; //holds the current question number
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
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
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++; //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++; //adds 1 to wrong attempts
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
    if (indexNumber <= 9) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
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

  //data to display to score board
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
