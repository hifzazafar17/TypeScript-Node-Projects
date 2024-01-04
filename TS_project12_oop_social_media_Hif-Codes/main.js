import inquirer from "inquirer";
import chalk from "chalk";
class User {
    username;
    constructor(username) {
        this.username = username;
    }
}
class Post {
    user;
    content;
    constructor(user, content) {
        this.user = user;
        this.content = content;
    }
}
class Comment {
    user;
    content;
    constructor(user, content) {
        this.user = user;
        this.content = content;
    }
}
class SocialMediaPlatform {
    users = [];
    posts = [];
    comments = [];
    createUser(username) {
        const newUser = new User(username);
        this.users.push(newUser);
        console.log(chalk.green(`User "${username}" created successfully!`));
    }
    createPost(username, content) {
        const user = this.findUserByUsername(username);
        if (user) {
            const newPost = new Post(user, content);
            this.posts.push(newPost);
            console.log(chalk.green('Post created successfully!'));
        }
        else {
            console.log(chalk.red(`User "${username}" not found! Please create the user first.`));
        }
    }
    async createComment(username, content) {
        const user = this.findUserByUsername(username);
        if (user) {
            const postChoices = this.posts.map((post, index) => ({
                name: `${index}: ${post.user.username} - ${post.content}`,
                value: index,
            }));
            const { postId } = await inquirer.prompt({
                type: 'list',
                name: 'postId',
                message: 'Choose a post to comment on:',
                choices: postChoices,
            });
            const newComment = new Comment(user, content);
            this.comments.push(newComment);
            console.log(chalk.green('Comment created successfully!'));
        }
        else {
            console.log(chalk.red(`User "${username}" not found!`));
        }
    }
    async likePost(username) {
        const user = this.findUserByUsername(username);
        if (user) {
            const postChoices = this.posts.map((post, index) => ({
                name: `${index}: ${post.user.username} - ${post.content}`,
                value: index,
            }));
            const { postId } = await inquirer.prompt({
                type: 'list',
                name: 'postId',
                message: 'Choose a post to like:',
                choices: postChoices,
            });
            console.log(chalk.green('Post liked successfully!'));
        }
        else {
            console.log(chalk.red(`User "${username}" not found!`));
        }
    }
    findUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    }
}
async function main() {
    console.log(chalk.blue('Welcome to the Social Media Platform!'));
    const socialMediaPlatform = new SocialMediaPlatform();
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Create User', 'Create Post', 'Create Comment', 'Like Post', 'Exit'],
        });
        if (action === 'Exit') {
            console.log(chalk.blue('Thank you for using the Social Media Platform. Goodbye!'));
            break;
        }
        switch (action) {
            case 'Create User':
                const { username } = await inquirer.prompt({
                    type: 'input',
                    name: 'username',
                    message: 'Enter the username:',
                });
                socialMediaPlatform.createUser(username);
                break;
            case 'Create Post':
                const { postUsername, postContent } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'postUsername',
                        message: 'Enter your username:',
                    },
                    {
                        type: 'input',
                        name: 'postContent',
                        message: 'Enter your post content:',
                    },
                ]);
                socialMediaPlatform.createPost(postUsername, postContent);
                break;
            case 'Create Comment':
                const { commentUsername, commentContent } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'commentUsername',
                        message: 'Enter your username:',
                    },
                    {
                        type: 'input',
                        name: 'commentContent',
                        message: 'Enter your comment content:',
                    },
                ]);
                socialMediaPlatform.createComment(commentUsername, commentContent);
                break;
            case 'Like Post':
                const { likeUsername } = await inquirer.prompt({
                    type: 'input',
                    name: 'likeUsername',
                    message: 'Enter your username:',
                });
                socialMediaPlatform.likePost(likeUsername);
                break;
        }
    }
}
main();
