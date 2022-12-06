function userPlay(round){
    const hand_shapes=["rock", "paper", "scissors"]
    let user_choice,
    user_exit;
    let input_taken=false;
    while (!input_taken){
        user_choice=prompt(`Round: ${round}: Rock, Paper or Scissors?--`);
        if (user_choice == null){
            do{
                user_exit=prompt("Are you sure you want to exit? (yes or no)");                
                if(user_exit==null){
                    alert("Alright. Good bye.");
                    throw "stop execution";
                }else {
                    user_exit=user_exit.toLowerCase().trim();
                    if (user_exit=="yes"){
                        alert("Alright. Good bye.");
                        throw "stop execution";
                    }else if (user_exit=="no"){
                        alert("Let's continue then!")
                        continue;
                    }else{
                        alert("Please enter yes or no.");
                    }
                }
            }while(user_exit != "yes" && user_exit != "no");
        }else{
            user_choice=user_choice.toLowerCase().trim();
            while(!hand_shapes.includes(user_choice)){
                user_choice=prompt("You should enter one of the these values:"+
            "   (rock, paper, or scissors.):");
            }
            input_taken=true;
        }
    }
    return user_choice;
}

function computerPlay(){
    let machine_choice_index;
    const hand_shapes=["rock", "paper", "scissors","paper","rock","scissors","rock", "paper", "scissors"];
    machine_choice_index=Math.floor(Math.random()*9);
    return hand_shapes[machine_choice_index];
}

function playRound(user_choice, machine_choice){
    let user_score,
    machine_score;
    round_results=[];
    if (user_choice==machine_choice){
        alert(`Both of you have chosen ${user_choice}!\n`);
        user_score=0;
        machine_score=0;
    }
    else {
        alert(`**You have chosen ${user_choice}!**\n`+
        `**The machine has chosen ${machine_choice}**`);
        if (user_choice=="rock" && machine_choice=="scissors" ||
        user_choice=="paper" && machine_choice=="rock" ||
        user_choice=="scissors" && machine_choice=="paper"){
            user_score=1;
            machine_score=0;
        }else{
            user_score=0;
            machine_score=1;
        }
    }
    round_results[0]=user_score;
    round_results[1]=machine_score;
    return round_results;
}

function print_RoundResults(round,user_score,machine_score,final_machineScore,final_userScore){
    if (user_score==machine_score){
        console.log(`Round ${round}: It's a tie\n`+
        `No change`);
        alert(`Round ${round}: It's a tie\n`+
        `No change`);
    }else if(user_score){
        alert(`Round ${round}: You have won this round!`);
        console.log(`Round ${round}: You have won this round!`);
    }
    else {
        alert(`Round ${round}: The machine has won this round!`);
        console.log(`Round ${round}: The machine has won this round!`);
    }
    alert(`Results up until now:\n`+
    `>user:${final_userScore}\n`+
    `>machine:${final_machineScore}`)
    console.log(`Results up until now:\n`+
    `>user:${final_userScore}\n`+
    `>machine:${final_machineScore}`);
}

function print_FinalResults(machine_scores,user_scores,final_machineScore,final_userScore){
    let user_scoresString = "",
    machine_scoresString="";
    if(machine_scores.length<5){
        if (machine_scores.length==3) {
            machine_scores.push(0,0);
            user_scores.push(0,0);
        }
        else {
            machine_scores.push(0);
            user_scores.push(0);
        }
    } 
    for (const score in user_scores){
        user_scoresString+=user_scores[score]+"          ";
    }
    for (const score in machine_scores){
        machine_scoresString+=machine_scores[score]+"          ";
    }
    if(final_userScore > final_machineScore){
        alert("^^^^Congrats You have won!!!^^^^");
    }else if (final_machineScore > final_userScore){
        alert("----The machine has won. Better luck next time ~_^---- ");
    }else if (final_machineScore == 0 && final_userScore ==0){
        alert("Final verdict: Nobody won :(");
    }else{
        alert("Final verdict: It's a tie!!!");
    }
    console.log("Final Results:\n"+
    "                  R1        R2        R3        R4        R5           |Total\n"+
    "------------------------------------------------------------------\n"+
    `User:           ${user_scoresString}   |${final_userScore}\n`+
    `Machine:     ${machine_scoresString}   |${final_machineScore}`);
    alert("Final Results:\n"+
    "                  R1        R2        R3        R4        R5           |Total\n"+
    "------------------------------------------------------------------\n"+
    `User:           ${user_scoresString}   |${final_userScore}\n`+
    `Machine:     ${machine_scoresString}   |${final_machineScore}`);
}

function game(){
    let user_score,
    machine_score,
    user_choice,
    machine_choice,
    two_pointsAtEnd_user,
    two_pointsAtEnd_machine;
    let round_results=[],
    final_userScore=0, 
    final_machineScore=0;
    const user_scores=[], 
    machine_scores=[];
    for(let i=0; i<5; i++){
        alert(`>>>>>>round ${i+1}<<<<<<`);
        machine_choice=computerPlay();
        user_choice=userPlay(i+1);
        round_results=playRound(user_choice, machine_choice);
        user_score=round_results[0];
        machine_score=round_results[1];
        user_scores.push(user_score);
        machine_scores.push(machine_score);
        if(user_score){
            final_userScore++;
        }else if (machine_score){
            final_machineScore++;
        }
        two_pointsAtEnd_user= Boolean(i==3 && final_userScore==2 && final_machineScore==0);
        two_pointsAtEnd_machine= Boolean(i==3 && final_machineScore==2 && final_userScore==0);
        if (final_userScore==3 || final_machineScore==3
        || two_pointsAtEnd_user || two_pointsAtEnd_machine) break;
        print_RoundResults(i+1,user_score,machine_score,final_machineScore,final_userScore);
    }
    print_FinalResults(machine_scores,user_scores,final_machineScore,final_userScore);
}

function start(){
    alert("&&&&***Are You Ready to Play?***&&&&");
    alert("&&&*******Let's Go!******&&&");
    let user_choice,
    play_again,
    menu,
    invalid_choice;
    
    do{ 
        invalid_choice=0;
        menu=0;
        user_choice=prompt("&&&&&**Menu**&&&&&\n(1)- How to play\n(2)- Start\n(3)- Exit\n"+
        "Plese select an option:");
        switch (user_choice){
            case "1":
                alert("-You will be playing against the machine in a Rock-Paper-Scissors match, where "+
                "the machine will be choosing randomly.\n-The match will consist of 5 rounds, "+
                "but there could be a winner before that; and at that point, the game will terminate.\n"+
                "-Results will be displayed at the end of each roundm to track the points.\n"+
                "-Good Luck, and \"May the odds be ever in your favor.\"");
                menu=1;
                break;
            case "2":
                game();
                play_again=prompt("Another match? (yes or y)");
                while(play_again ==""){
                    play_again=prompt("Please enter a value");
                }
                if (play_again==null) {
                    alert("Good game! Until next time.")
                    break;
                }else{
                    play_again=play_again.toLowerCase().trim();
                    if (play_again!="yes"&&play_again!="y"){
                        alert("Good game! Until next time.");
                        break;
                    }else break;
                }
            case "3":
                alert("Thank you. Bye!");
                throw "stop execution";
            case null:
                alert("Thank you. Bye");
                throw "stop execution";
            default:
                alert("Please select one of the available options.");
                invalid_choice=1;
        }
    }while(play_again=="yes"||play_again=="y"||menu==1||invalid_choice==1);
}
start();
