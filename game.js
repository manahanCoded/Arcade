//Start Page Going to First Level
document.querySelector(".start").addEventListener("click",function(){
    document.querySelector(".start_page").classList.remove("show");
    document.querySelector(".start_page").classList.add("hide");

    
    document.querySelector(".first_level_page_goal").classList.remove("hide");
    document.querySelector(".first_level_page_goal").classList.add("show");
});
// First Level to Second Level
document.querySelector(".first_next_level").addEventListener("click",function(){
    document.querySelector(".first_level_page_goal").classList.remove("show");
    document.querySelector(".first_level_page_goal").classList.add("hide");

    
    document.querySelector(".second_level_page_goal").classList.remove("hide");
    document.querySelector(".second_level_page_goal").classList.add("show");
});




//First Level 

document.querySelector(".submit_1").addEventListener("click",function(){
    var question_1 = document.querySelector(".question_1").value;
    var question_2 = document.querySelector(".question_2").value;
    var question_3 = document.querySelector(".question_3").value;

    if(question_1 === "yellow" && question_2 === "height" && question_3 === "200px"){
        document.querySelector(".yellow_box span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".yellow_answer").style.height="200px";
        document.querySelector(".yellow_answer").style.width="200px";
        document.querySelector(".yellow_answer").style.background="yellow";
    }else{
        document.querySelector(".yellow_box span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    

});

document.querySelector(".submit_2").addEventListener("click",function(){
    var question_4 = document.querySelector(".question_4").value;
    var question_5 = document.querySelector(".question_5").value;
    var question_6 = document.querySelector(".question_6").value;

    if(question_4 === "background-color" && question_5 === "200px" && question_6 === "width"){
        document.querySelector(".green_box span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".green_answer").style.height="200px";
        document.querySelector(".green_answer").style.width="200px";
        document.querySelector(".green_answer").style.background="green";
    }else{
        document.querySelector(".green_box span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    

});

document.querySelector(".submit_3").addEventListener("click",function(){
    var question_7 = document.querySelector(".question_7").value;
    var question_8 = document.querySelector(".question_8").value;
    var question_9 = document.querySelector(".question_9").value;

    if(question_7 === "center" && question_8 === "align-items" && question_9 === "flex"){
        document.querySelector(".position_box span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".first_level_container_answer").style.justifyContent="center";
        document.querySelector(".first_level_container_answer").style.alignItems="center";
        document.querySelector(".first_level_container_answer").style.display="flex";
    }else{
        document.querySelector(".position_box span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    

});


//Second Level 
document.querySelector(".submit_4").addEventListener("click", function(){
    var question_10 = document.querySelector(".question_10").value;
    var question_11= document.querySelector(".question_11").value;
    var question_12= document.querySelector(".question_12").value;

    if(question_10 === "grid" && question_11 === "gap" && question_12 === "justify-content"){
        document.querySelector(".background_box span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".box_container_answer").classList.add("box_container");
        document.querySelector(".box_container_answer").style.color ="white";
    }else{
        document.querySelector(".background_box span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    


});

document.querySelector(".submit_5").addEventListener("click", function(){
    var question_13 = document.querySelector(".question_13").value;
    var question_14= document.querySelector(".question_14").value;
    var question_15= document.querySelector(".question_15").value;

    if(question_13 === "1/1/1/1" && question_14 === "1/2/1/5" && question_15 === "2/1/4/1"){
        document.querySelector(".box_answer_1 span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".red_answer").classList.add("red");
        document.querySelector(".white_one_answer").classList.add("white_one");
        document.querySelector(".white_two_answer").classList.add("white_two");
    }else{
        document.querySelector(".box_answer_1 span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    


});

document.querySelector(".submit_6").addEventListener("click", function(){
    var question_16 = document.querySelector(".question_16").value;
    var question_17= document.querySelector(".question_17").value;
    var question_18= document.querySelector(".question_18").value;

    if(question_16 === "2/4/2/4" && question_17 === "2/2/4/4" && question_18 === "4/1/4/1"){
        document.querySelector(".box_answer_2 span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".blue_answer").classList.add("blue");
        document.querySelector(".white_four_answer").classList.add("white_four");
        document.querySelector(".white_three_answer").classList.add("white_three");
    }else{
        document.querySelector(".box_answer_2 span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
                                                                
    }
    


});
document.querySelector(".submit_7").addEventListener("click", function(){
    var question_19 = document.querySelector(".question_19").value;
    var question_20= document.querySelector(".question_20").value;
    var question_21= document.querySelector(".question_21").value;

    if(question_19 === "3/4/5/4" && question_20 === "4/3" && question_21 === "4/2"){
        document.querySelector(".box_answer_3 span").innerHTML = "<i class='fa-solid fa-square-check fa-xl' style='color: green'></i>";
        document.querySelector(".white_five_answer").classList.add("white_five");
        document.querySelector(".other_yellow_answer").classList.add("yellow");
        document.querySelector(".black_answer").classList.add("black")
    }else{
        document.querySelector(".box_answer_3 span").innerHTML = "<i class='fa-solid fa-square-xmark fa-xl' style='color: red'></i>";
        ;
                                                       
    }
    


});