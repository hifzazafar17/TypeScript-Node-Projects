// aiChatbot.ts
import inquirer from 'inquirer';
import natural from 'natural';

// NLP Utility
function processInput(input: string): string[] {
    const tokenizer = new natural.WordTokenizer();
return tokenizer.tokenize(input.toLowerCase());
}

// Chatbot Responses
const responses: Record<string, string> = {
    'hello': 'Hi there! How can I help you today?',
    'how are you': 'I am just a computer program, but thank you for asking!',
    'bye': 'Goodbye! Have a great day.',
    // Add more responses as needed
};

// Chatbot Logic
async function runChatbot(): Promise<void> {
    while (true) {
        const response = await inquirer.prompt({
            type: 'input',
            name: 'userInput',
            message: 'You: ',
        });

        const userTokens = processInput(response.userInput);

        // Simple rule-based matching, you can enhance this based on your needs
        for (const [query, reply] of Object.entries(responses)) {
            const queryTokens = processInput(query);
            if (queryTokens.some(token => userTokens.includes(token))) {
                console.log(`Chatbot: ${reply}`);
                break;
            }
        }
    }
}

// Run the Chatbot
runChatbot();
