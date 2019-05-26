'use strict';

import { quizData } from './quiz-data.js';

const form = document.querySelector('.test--form');

const test = createTest(quizData);

form.insertAdjacentElement('afterbegin', test);

function createTest({ title, questions }) {
  const testContainer = document.createElement('div');

  const testTitle = document.createElement('h2');
  testTitle.textContent = title;
  testTitle.classList.add('test--title');

  testContainer.appendChild(testTitle);

  questions.forEach(question => {
    testContainer.appendChild(
      createQuestion(question, questions.indexOf(question)),
    );
  });

  return testContainer;
}

function createQuestion({ question, choices }, index) {
  const questionSection = document.createElement('section');
  questionSection.classList.add('question--section');

  const questionTitle = document.createElement('h3');
  questionTitle.classList.add('question--title');
  questionTitle.textContent = `${index + 1}. ${question}`;

  const choicesList = document.createElement('ol');

  choices.forEach(choice =>
    choicesList.appendChild(createChoice(choice, index)),
  );

  questionSection.append(questionTitle, choicesList);
  return questionSection;
}

function createChoice(choice, index) {
  const choiceOption = document.createElement('li');

  const choiceLabel = document.createElement('label');

  const choiceInput = document.createElement('input');
  choiceInput.type = 'radio';
  choiceInput.name = `answerOption${index}`;
  choiceInput.value = choice;
  choiceInput.classList.add('radio');

  const labelText = document.createTextNode(choice);
  choiceLabel.append(choiceInput, labelText);

  choiceOption.appendChild(choiceLabel);

  return choiceOption;
}

const submitButton = document.querySelector('test--submit');

const total = document.createElement('p');
total.classList.add('result');
form.insertAdjacentElement('afterend', total);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const userAnswers = [];
  for (const value of formData.values()) {
    userAnswers.push(value);
  }

  const questionSections = document.querySelectorAll('.question--section');

  if (questionSections.length > userAnswers.length) {
    total.textContent = 'Проставлены ответы не на все вопросы';
    return;
  }

  const results = [];

  for (let i = 0; i < userAnswers.length; i++) {
    const rightAnswer =
      quizData.questions[i].choices[quizData.questions[i].answer];
    if (userAnswers[i] === rightAnswer) {
      results.push(1);
      questionSections[i].classList.add('right-answer');
    } else {
      results.push(0);
      questionSections[i].classList.add('wrong-answer');
    }
  }
  const resultsSum = results.reduce((sum, result) => (sum += result), 0);
  const resultCoefficient = Math.round((resultsSum / results.length) * 100);
  if (resultCoefficient >= 80) {
    total.textContent = `Поздравляю! Вы успешно прошли тест! Верных ответов: ${resultsSum} из ${
      results.length
    } (${resultCoefficient}%)`;
  } else {
    total.textContent = `К сожалению, вы не прошли тест( Верных ответов: ${resultsSum} из ${
      results.length
    } (${resultCoefficient}%)`;
  }
}
