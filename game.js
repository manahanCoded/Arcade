//Start Page
document.querySelector(".start").addEventListener("click",function(){
    document.querySelector(".start_page").classList.remove("show");
    document.querySelector(".start_page").classList.add("hide");

    
    document.querySelector(".first_level_page_goal").classList.remove("hide");
    document.querySelector(".first_level_page_goal").classList.add("show");
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


