import chalk from "chalk";
import inquirer from "inquirer";
import terminalImage from "terminal-image";
import asciiart from "ascii-art";

const asciiArt=`
   
                                                   @@*=*%                                           
    @@@@@@                                     @%*=--*                                              
 @%#**++++*#%@@@                             @#----#                                                
     *=-==*+++++*%@@                       @*----++@                                                
      %-----=*+++++*%@@                  @#-----+=@                                                 
      %+-------+*++++++%@            @%#*#*=---=-=@                                                 
       #---------=*++++++#@@     %**%%%#*+**####*###@@                                              
       *-----------++++++++*%%#*+*++++++++++*#%#+=@                                                 
      @-------------=#++++++++**++++#+++##++++++++*%@                                               
      #---------------++++++++++++*+++*@@@@@%*+++++++#@@                                            
     %+---------------=*++++++++*+*+++#@@%##%@%++++++*+%@@@                                         
     %=----------------+++++++++++*+++*@#++++++%+++++++@@%@@                                        
     #--------------+*-=#++++++++++++++#+++++++++++**++**++%@                                       
    @*-------------*#--#++++++++++++++++++#=-#++++#--=++++++*@                                      
    @#---------=*++++*+++++++++++++++++++*-...-**#*--=+++++++%                                      
    @%---------*=***+++++++++++++++++++++*:....:#-+----=*:-*+*@                                     
     @=---------#*-++++++++++++++++++++++*......---------..:++@                                     
     @%-----------**+++++++++++++++++++++*......--------:...*+%                                     
      @%=------=*#+++++++++++++++++++++++*......:------=....++@                        @%           
        @*--=%#+++++++++++++++++++++++++++:...=*=+-----+....+%@                      @*++*          
          @#+++++++++++++++++++++*+++++++*-..:+%#=-----=-+*=*%                   %@@%#***#          
        @%++++++++++++++++++++++++++**++++=..=#@@=----=:+%#+#@                 %##++++++++%@%%###%% 
       @#+++++++++++++++++++*++++++++++**##:.-#@#-----+-%@#+@                 %-:++*+++++++++*=---*%
       %+++++++++++++++++++++=-****+++++*.-:::=+++=--=-=%%#**%@   @@@@%    @#*#=++.:++++++++------*@
       #+*****++++++++++++++=  .:*****%+-:...    ..*%=--:...+**%@          %+=+**-=+++++++=------=@ 
       @@@  @%*++++++++++++*.    ..+@@@@#....     :@@%%@@-  =+++@           #+=.:+#*++++++*==---*%  
                @#*++++++++*.      :@@@@@%:        ..=*:. .+****%@%%         *-+@@%-=++++*---=*@    
                   @%+++++++*      -@@@@@@@=.      ... ..:*+++++@    #   @%#*++=*+-=*+*#@%%@        
                     @%++++++:     :@@@@@@@@%+...:+-:+*#*+***%%%   ##% @#+++-++++++++#              
                       @#+++++.    .%#%@@@@@@@@=..   .++*%@@     %#**+*+**=:-+=++++++#              
                         @#++*-.    =#*#*%@@@%.    ..*%@           @**#@@=::++++*#+++# ##%%         
                           @%*++.   .*#***#@+.  ..=#@                   *:::::-*+%%%%%*#            
                             @@%#:.. ..+###=..:-*                       +::::::=++%%*#@             
                                 @@-+..    ..@                    %=#%*++::::::*+++%@%-=%           
 @@@%%#######%  @%%%@     @@     @   @#=..=#@          @@@   %@%%+:-#+++++:::=+++++++*::%%          
@#***********##*******#%  %#%   %#@                 %****%#*****%*--=++++**##**##**++--***%@  @%##% 
%#************%*********#@**%  %#*#             @#@ %****#*****#%@@#%@#*****##******##*#***#%%#****%
%##%%#****%#*****%@%#****#***%@#**#@      @@@#%###  @****#***#@   @****%%#**##***%%#***##********#% 
     %****%#****%   %****##**##***#%   %####*#####% %****#****%%%@#****%%#**##***#%#***#%#*****#%   
     %#***##****%   %****#%********%  %###%#%%%#%%  @***#%******#@#****#*****#********#% @#***%     
     %#***##****%   %****##********#@   %####%@     %***###****#*#**********%@#*******#%  #***#     
     %#***##****#@ %#****#**********%  @@@     @%%@@#***#@#***#=.*#***#****%  %***##****#@#**#%     
     @#****%#***********##*##**%#***#@        #********#@ #********#*#%#***#% @***#@%#***##**#%     
      %****#%#********##**#@%#%@#***#%        @%#*****#@  %******###*#@ #***#@ #***% @###%***#%%%%%%
      @%%@@@  @%%###%@%@%#@  @  %##%@            @@%%@    @%%%@%@####%  @##%@  %##%@     @%%##@ %%%%

`
console.log(chalk.bold.blue(asciiArt)); // Display ASCII art

class Character {
    name: string;
    energy: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    decreaseEnergy() {
        this.energy -= 25;
        if (this.energy <= 0) {
            console.log(chalk.red.bold.italic(`${this.name} is out of energy. Game over! Better luck next time.`));
            process.exit();
        }
    }

    increaseEnergy() {
        this.energy = 100;
    }
}

class Cat extends Character {
    chaseMouse(mouse: Mouse) {
        console.log(`${chalk.bold.green(this.name)} is chasing ${chalk.bold.red(mouse.name)}!`);
        let num = Math.floor(Math.random() * 2);

        if (num > 0) {
            mouse.decreaseEnergy();
            console.log(chalk.bold.red(`${mouse.name}'s energy is ${mouse.energy}`));
        } else {
            this.decreaseEnergy();
            console.log(chalk.bold.green(`${this.name} failed to catch ${mouse.name}! ${this.name}'s energy is ${this.energy}`));
        }
    }
}

class Mouse extends Character {
    evadeCat(cat: Cat) {
        console.log(`${chalk.bold.red(this.name)} is evading ${chalk.bold.green(cat.name)}!`);
        let num = Math.floor(Math.random() * 2);

        if (num > 0) {
            cat.decreaseEnergy();
            console.log(chalk.bold.green(`${cat.name} failed to catch ${this.name}! ${cat.name}'s energy is ${cat.energy}`));
        } else {
            this.decreaseEnergy();
            console.log(chalk.bold.red(`${this.name}'s energy is ${this.energy}`));
        }
    }
}

let player = await inquirer.prompt({
    type: "list",
    name: "character",
    message: "Choose your character:",
    choices: ["Tom", "Jerry"]
});

const tom = new Cat("Tom");
const jerry = new Mouse("Jerry");

console.log(chalk.bold.green(`${player.character}, welcome to The Great Chase!`));

do {


    if (player.character === "Tom") {
        const action = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Choose your action:",
            choices: ["Chase Jerry", "Take a Nap", "Give Up"]
        });

        if (action.opt === "Chase Jerry") {
            tom.chaseMouse(jerry);
        } else if (action.opt === "Take a Nap") {
            tom.increaseEnergy();
            console.log(chalk.bold.italic.green(`${tom.name} takes a nap. Energy restored!`));
        } else if (action.opt === "Give Up") {
            console.log(chalk.red.bold.italic(`${tom.name} gives up. Better luck next time!`));
            process.exit();
        }
    } else if (player.character === "Jerry") {
        const action = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Choose your action:",
            choices: ["Evade Tom", "Eat Cheese", "Hide"]
        });

        if (action.opt === "Evade Tom") {
            jerry.evadeCat(tom);
        } else if (action.opt === "Eat Cheese") {
            jerry.increaseEnergy();
            console.log(chalk.bold.italic.green(`${jerry.name} eats cheese. Energy restored!`));
        } else if (action.opt === "Hide") {
            console.log(chalk.red.bold.italic(`${jerry.name} hides. ${tom.name} gives up. You escaped!`));
            process.exit();
        }
    }
} while (true);
