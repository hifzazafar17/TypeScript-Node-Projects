import chalk from "chalk";
import inquirer from "inquirer";
const HarryPotter = `
                                      @@@@@@@@@@@@@@@@@@@@                                          
                                       @@@@@@@@@@@@@@@@@@                                           
          @@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@                                            
           @@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@                                            
             @@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@                                             
             @@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@                                             
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@                               
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@                                   
@@@@@@@@@@    @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@                                          
@@@@@@@       @@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@                      
@@@@@         @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@                     
 @@@@@@@      @@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@   @@@@@@@           
   @@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@          
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@      
         @@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@      @@@@@@@@@@     
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@       @@@@@@@@@@    
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@       @@@@@@@@@@@@  
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@ 
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@        @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@        @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@        @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@        @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@         @@@@@@@@@@@@@@        @@@@@@@@@@@@@@
             @@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@         @@@@@@@@@@@@@@        @@@@@@@@@@@@@@
           @@@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@    @    @@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
        @@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
                               @@     @@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@ 
                                    @@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
                                   @@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@    
                                                    @@@@@@@ @@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@       
                                                            @@@@@@@@@@@@@@@@@@@   @@@@@@@           
                                                             @@@@@@@@@@@@@@@@@@                     
                                                             @@@@@@@@@@@@@@@@@@                     
                                                             @@@@@@@@@@@@@@@@@@                     
                                                              @@@@@@@@@@@@@@@@@                     
                                                              @@@@@@@@@@@@@@@@@                     
                                                              @@@@@@@@@@@@@@@@@                     
                                                           @@ @@@@@@@@@@@@@ @@@                     
                                                           @@@@@@@@@@@@@@@@  @@                     
                                                           @@@@@@@@@@@@@@@@  @@@                    
                                                            @@@@@@@@@@@@@@@                         
                                                            @@@@@@@@@@@@@@@                         
                                                            @@@@@@@@@@@@@@@                         
                                                             @@@@@@@@@@@@@@                         
                                                             @@@@@@@@@@@@@@                         
                                                             @@@@@@@@@@@@@@                         
                                                              @@@@@@@@@@@@@                         
                                                              @@@@@@@@@@@@                          
                                                              @@@@@@@@@@@@                          
                                                              @@@@@@@@ @@@                          
                                                              @@@@@@@@  @@                          
                                                               @@@@@@@                              
                                                               @@@@@@                               
                                                               @@@@@@                               
                                                               @@@@@@                               
                                                                @@@@@                               
                                                                @@@@@                               
                                                                @@@@                                
                                                                 @@@                                
                                                                 @@@                                
                                                                 @@@                                
                                                                 @@@                                
                                                                  @                                 
`;
console.log(chalk.bold.red(HarryPotter)); // Display ASCII art
class Wizard {
    name;
    spellPower = 100;
    constructor(name) {
        this.name = name;
    }
    castSpell(opponent) {
        const spellSuccess = Math.random() > 0.5;
        if (spellSuccess) {
            opponent.reduceSpellPower();
            console.log(chalk.bold.red(`${this.name} casts a spell on ${opponent.name}!`));
        }
        else {
            this.reduceSpellPower();
            console.log(chalk.bold.green(`${opponent.name} deflects the spell! ${this.name}'s spell backfires!`));
        }
    }
    reduceSpellPower() {
        this.spellPower -= 25;
        if (this.spellPower <= 0) {
            console.log(chalk.red.bold.italic(`${this.name} is out of spell power. Game over! Better luck next time.`));
            process.exit();
        }
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your wizard's name:"
});
const playerWizard = new Wizard(player.name);
console.log(chalk.bold.green(`${playerWizard.name}, welcome to the Wizarding World!`));
do {
    const opponents = ["Draco Malfoy", "Bellatrix Lestrange", "Lord Voldemort"];
    const opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Choose your opponent:",
        choices: opponents
    });
    const opponentWizard = new Wizard(opponent.select);
    console.log(`${chalk.bold.green(playerWizard.name)} vs ${chalk.bold.red(opponentWizard.name)}`);
    const action = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Choose your action:",
        choices: ["Cast Spell", "Drink Potion", "Run For Your Life..."]
    });
    if (action.opt === "Cast Spell") {
        playerWizard.castSpell(opponentWizard);
    }
    else if (action.opt === "Drink Potion") {
        playerWizard.reduceSpellPower();
        console.log(chalk.bold.italic.green(`${playerWizard.name} drinks a magic potion. Spell power restored!`));
    }
    else if (action.opt === "Run For Your Life...") {
        console.log(chalk.red.bold.italic(`${playerWizard.name} decides to run away. Better luck next time!`));
        process.exit();
    }
} while (true);
