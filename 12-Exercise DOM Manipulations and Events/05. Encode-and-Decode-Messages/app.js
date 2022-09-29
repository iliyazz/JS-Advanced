function encodeAndDecodeMessages() {
    let textAreas = document.getElementsByTagName('textarea');
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', encodeAndSend);
    buttons[1].addEventListener('click', decode);
    function encodeAndSend(){
        textAreas[1].textContent = encodeDecode(textAreas[0].value, 1);
        textAreas[0].value = '';
    }
    function decode(){
        textAreas[1].value = encodeDecode(textAreas[1].value, - 1);
    }
    function encodeDecode(string, num){
        let message = '';
        for(let i = 0; i < string.length; i++){
            message += String.fromCharCode(Number(string.charCodeAt(i)) + num)
        }
        return message;
    }
}