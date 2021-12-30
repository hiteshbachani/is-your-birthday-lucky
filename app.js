var btn = document.querySelector("#button");
var userLuckyNumber = document.querySelector(".luckyNumber");
var userDOB = document.querySelector(".dateOfBirth");
var showOutput = document.querySelector("#show-output");





function checksBirthDateisLucky() {
    var DOB = userDOB.value;
   
   


    var sum = calculateSum(DOB)
    comapreValues(sum, userLuckyNumber)



}


function comapreValues(sum, userLuckyNumber){
    var LN = userLuckyNumber.value;

  

    if(sum % Number(LN)===0){
        showOutput.value ='You are born on a lucky day';
    } else {
        showOutput.value='You create your own luck, not your birth-date!';
    }


}




function calculateSum(DOB) {
    DOB = DOB.replaceAll("-", "")


    let sum = 0;
    for (let index = 0; index < DOB.length; index++) {
        sum = sum + Number(DOB.charAt(index));
    }

    return sum;

    


}




btn.addEventListener('click', checksBirthDateisLucky)





