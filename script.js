alert("&&&&***Are You Ready to Play?***&&&&");
alert("&&&*******Let's Go!******&&&");
let user_choice;
let play_again;
let menu;
let invalid_choice;

do{ 
    invalid_choice=0;
    menu=0;
    user_choice=prompt("&&&&&**Menu**&&&&&\n(1)- How to play\n(2)- Start\n"+
    "Plese select an option:");
    switch (user_choice){
        case "1":
            alert("You will be playing against the machine in a Rock Paper Scissors match;\n"+
            "and the match will consist of 5 rounds.In each round, an random player will start,\n"+
            "and as for your options, you will\nhave to choose between either, rock, paper or scissors.\n"+
            "Good Luck, and \"May the odds be ever in your favor!");
            menu=1;
            break;
        case "2":
            game();
            play_again=prompt("Another match? (yes or y)");
            break;  
        default:
            alert("Please select one of the available options.");
            invalid_choice=1;
    }
}while(play_again=="yes"||play_again=="y"||menu==1||invalid_choice==1);



function playRound(user_choice, machine_choice){
    let user_score,
    machine_score;
    const hand_shapes=["rock", "paper", "scissors"],
    round_results=[];

    while(!hand_shapes.includes(user_choice)){
        user_choice=prompt("You should enter one of the these values:"+
        "(rock, paper, or scissors.):");
    }
    if (user_choice == machine_choice){
        alert(`Both of you have chosen ${user_choice}!\n`);
        user_score=0;
        machine_score=0;
    }
    else {
        alert(`**You have chosen ${user_choice}!**\n`+
        `**The machine has chosen ${machine_choice}**`);
        if(user_choice=="rock" && machine_choice=="scissors"){
            alert("You have won this round!");
            user_score=1;
            machine_score=0;
        }
        else if (user_choice=="paper" && machine_choice=="rock"){
            alert("You have won this round!");
            user_score=1;
            machine_score=0;
        }else if(user_choice=="scissors" && machine_choice=="paper"){
            alert("You have won this round!");
            user_score=1;
            machine_score=0;
        }else{
            alert("The machine has won this round!");
            user_score=0;
            machine_score=1;
        }
    }
    round_results[0]=user_score;
    round_results[1]=machine_score;
    return round_results;
}


function game(){
    let machine_choice_index, 
    user_score,
    machine_score,
    user_choice,
    machine_choice;
    let round_results=[],
    final_userScore=0, 
    final_machineScore=0,
    user_scoresString = "",
    machine_scoresString="";
    const hand_shapes=["rock", "paper", "scissors","scissors","paper","rock"],
    user_scores=[], 
    machine_scores=[];

    for(let i=0; i<5; i++){
        alert(`>>>>>>round ${i+1}<<<<<<`);
        machine_choice_index=Math.floor(Math.random()*6);
        machine_choice=hand_shapes[machine_choice_index];
        user_choice=prompt("Rock, Paper or Scissors?--").toLowerCase().trim();
        round_results=playRound(user_choice, machine_choice);
        user_score=round_results[0];
        machine_score=round_results[1];
        user_scores.push(user_score);
        machine_scores.push(machine_score); 
        if(user_score){
            final_userScore++;
            if (final_userScore==3) break;
        }else if (machine_score){
            final_machineScore++;
            if (final_machineScore==3) break;
        }else{
            alert(`Round ${i+1}: It's a tie\n`+
            `No change`);
            continue;
        }
        alert(`Round ${i+1}: Results up until now:\n`+
        `>user:${final_userScore}\n`+
        `>machine:${final_machineScore}`);
    }

    if(machine_scores.length<5){
        if (machine_scores.length==3) {
            machine_scores.push(0,0)
            user_scores.push(0,0)
        }
        else {
            machine_scores.push(0);
            user_scores.push(0)
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
        alert("Nobody won :(");
    }else{
        alert("It's a tie!!!");
    }
    alert("                  R1        R2        R3        R4        R5           |Total\n"+
    "------------------------------------------------------------------\n"+
    `User:           ${user_scoresString}   |${final_userScore}\n`+
    `Machine:     ${machine_scoresString}   |${final_machineScore}`);
}