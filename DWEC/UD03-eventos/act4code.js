

function cambiarColor(){
    document.body.bgColor="rgb("+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+")";
}
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min) + min);
}
document.ondblclick=cambiarColor;