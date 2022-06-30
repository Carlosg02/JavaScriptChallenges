//Medium
var message = prompt("Type you message here:");
if(message === message.toUpperCase()){
    console.log("The user is shouting");
}else if(message === message.toLowerCase()){
    console.log("The user is whispering");
}else{
    console.log("The user is talking normally");
}