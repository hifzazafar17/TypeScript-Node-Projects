// import readlineSync from 'readlinesync';
export {};
// class Question {
//   constructor(public question: string, public options: string[], public correctAnswerIndex: number) {}
// }
// class Quiz {
//   private questions: Question[] = [];
//   private currentQuestionIndex: number = 0;
//   private score: number = 0;
//   constructor(questions: Question[]) {
//     this.questions = questions;
//   }
//   private displayQuestion() {
//     const currentQuestion = this.questions[this.currentQuestionIndex];
//     console.log(`\nQuestion ${this.currentQuestionIndex + 1}: ${currentQuestion.question}`);
//     currentQuestion.options.forEach((option, index) => {
//       console.log(`${index + 1}. ${option}`);
//     });
//   }
//   private processAnswer(userAnswer: number) {
//     const currentQuestion = this.questions[this.currentQuestionIndex];
//     if (userAnswer === currentQuestion.correctAnswerIndex + 1) {
//       console.log("Correct!");
//       this.score++;
//     } else {
//       console.log(`Incorrect! The correct answer is ${currentQuestion.correctAnswerIndex + 1}.`);
//     }
//     this.currentQuestionIndex++;
//     if (this.currentQuestionIndex < this.questions.length) {
//       this.displayQuestion();
//     } else {
//       this.showResult();
//     }
//   }
//   private showResult() {
//     console.log("\nQuiz Completed!");
//     console.log(`Your Score: ${this.score} out of ${this.questions.length}`);
//   }
//   public startQuiz() {
//     console.log("Welcome to the Programming Quiz!\n");
//     while (this.currentQuestionIndex < this.questions.length) {
//       this.displayQuestion();
//       const userAnswer = readlineSync.questionInt('Your answer (enter the option number): ');
//       if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > this.questions[this.currentQuestionIndex].options.length) {
//         console.log("Invalid input. Please enter a valid option number.");
//         continue;
//       }
//       this.processAnswer(userAnswer);
//     }
//     this.showResult();
//   }
// }
// // Sample questions for the quiz
// const questions: Question[] = [
//   new Question("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], 2),
//   new Question("Which programming language is this quiz written in?", ["Java", "Python", "TypeScript", "C++"], 3),
//   new Question("What does HTML stand for?", ["Hypertext Markup Language", "Hyper Transfer Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language"], 1),
// ];
// // Create a new Quiz instance with the sample questions
// const quiz = new Quiz(questions);
// // Start the quiz
// quiz.startQuiz();
