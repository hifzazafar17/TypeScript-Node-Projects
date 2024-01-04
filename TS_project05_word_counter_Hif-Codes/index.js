// // PIAIC_project05_word_counter
// // Import the 'inquirer' library for handling user input
// import inquirer from "inquirer";
// // Prompt the user to enter a sentence
// const answers: {
//     Sentence: string
// } = await inquirer.prompt([
//     {
//         name: "Sentence",
//         type: "input",
//         message: "Enter your sentence to count the words: "
//     }
// ]);
// // Extract the sentence from the user's input
// const userSentence = answers.Sentence;
// // Trim the sentence to remove leading and trailing whitespaces
// const trimmedSentence = userSentence.trim();
// // Split the trimmed sentence into an array of words using spaces as separators
// const wordsArray = trimmedSentence.split(" ");
// // Count the number of words in the sentence
// const wordCount = wordsArray.length;
// // Display the result to the user
// console.log(`Your sentence has ${wordCount} word(s)`);
// // example 2
// // Import the 'inquirer' library for handling user input
// import inquirer from "inquirer";
// // Async function to handle the inquirer prompt
// async function promptUser() {
//     const answers: {
//         Sentence: string;
//     } = await inquirer.prompt([
//         {
//             name: "Sentence",
//             type: "input",
//             message: "Enter your sentence to count the words: ",
//         },
//     ]);
//     // Extract the sentence from the user's input
//     const userSentence = answers.Sentence;
//     // Trim the sentence to remove leading and trailing whitespaces
//     const trimmedSentence = userSentence.trim();
//     // Split the trimmed sentence into an array of words using spaces as separators
//     const wordsArray = trimmedSentence.split(" ");
//     // Count the number of words in the sentence
//     const wordCount = wordsArray.length;
//     // Display the result to the user
//     console.log(`Your sentence has ${wordCount} word(s)`);
// }
// // Call the async function to start the program
// promptUser();
// example 3
// PIAIC_project05_word_counter
import inquirer from "inquirer";
async function countWords() {
    // Prompt the user to enter a sentence
    const { Sentence } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the words: "
        }
    ]);
    // Extract the sentence from the user's input
    const userSentence = Sentence;
    // Trim the sentence to remove leading and trailing whitespaces
    const trimmedSentence = userSentence.trim();
    // Split the trimmed sentence into an array of words using spaces as separators
    const wordsArray = trimmedSentence.split(" ");
    // Count the number of words in the sentence
    const wordCount = wordsArray.length;
    // Display the result to the user
    console.log(`Your sentence has ${wordCount} words`);
}
// Run the function
countWords();
