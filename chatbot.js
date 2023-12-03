const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const qaPairs = [
  {
    question: 'What is 1 + 1?',
    answer: '1 + 1 equals 2.'
  },
  {
    question: 'What is the date today?',
    answer: 'I do not know the exact date, but I am pretty sure that we are in the year 2023'
  },
  {
    question: 'What is my name?',
    answer: 'I only know the name Abdulaziz.'
  },
  {
    question: 'Am I alone?',
    answer: 'No, you are not alone.'
  },
  {
    question: 'Exit',
    answer: 'Goodbye!'
  }
];
function chat() {
  rl.question('User: ', userInput => {
    const exitCommand = ['exit', 'quit'];
    if (exitCommand.includes(userInput.toLowerCase())) {
      console.log('Chatbot: Goodbye!');
      rl.close();
      return;
    }
    const qa = qaPairs.find(qaPair => qaPair.question.toLowerCase() === userInput.toLowerCase());
    if (qa) {
      console.log('Chatbot:', qa.answer);
    } else {
      console.log('Chatbot: Sorry, I don\'t understand. Can you please rephrase your question?');
    }
    chat();
  });
}
console.log('Chatbot: Hello! How can I assist you today?');
chat();