// function showData(){
//       document.write("Content visible in 2 second")
// }
// var beforeUse = "I am executed before showData function"
// document.write(beforeUse)


// function showTime(){
//     var day = new Date();
//     document.getElementById("clock").innerHTML = day.toLocaleTimeString();
// }
//  setInterval(showTime,1000)


let timeoutID

function delayedMessage(){
   timeoutID = setTimeout(showAlert,2000)
}

function showAlert(){
    alert("This is Alert Message");
}

function clearSession(){
       clearInterval(timeoutID)
}