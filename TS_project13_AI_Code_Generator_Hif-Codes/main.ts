// index.ts
import * as inquirer from 'inquirer';
import natural from 'natural';

// NLP Utility
function processInput(input: string): string[] {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(input.toLowerCase()) || []; // Use empty array if tokens is null
    return tokens;
}

// Code Snippets
const codeSnippets: Record<string, string> = {
    'loop through array': 'for (let i = 0; i < array.length; i++) { }',
    'create variable': 'const variableName = value;',
    // Add more snippets as needed
};

// User Interaction
const response = await inquirer.prompt({
    type: 'input',
    name: 'codeDescription',
    message: 'Describe the code you need:',
});
     return response.codeDescription;
}

// Code Generation Logic
async function generateCode(): Promise<void> {
    const userDescription = await getUserInput();
    const processedInput = processInput(userDescription);
    let generatedCode = 'Code not found.';

    // Simple pattern matching logic, you can enhance this based on your needs
    for (const [description, code] of Object.entries(codeSnippets)) {
        const snippetTokens = processInput(description);
        if (snippetTokens.every(token => processedInput.includes(token))) {
            generatedCode = code;
            break;
        }
    }

    console.log('Generated Code:');
    console.log(generatedCode);
}

// Run the Code Generation
generateCode();
