function gate(){
    const pin =gatepoin();
    const pinstring = pin + '';
    if (pinstring.length===4){
        return pin;
    }

    else{
       // console.log('hate me',pin)
        return gate()}
}
function gatepoin(){
    const random = Math.round(Math.random()*10000);
    return random
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin =gate();
    console.log(pin);
    // display pin
    const displaypin =document.getElementById('display-pin');
    displaypin.value=pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const number =event.target.innerText;
    const typesNumberField =document.getElementById('types-number');
    const previousNumber =  typesNumberField.value;
if(isNaN(number)){
    if (number==='C'){
        typesNumberField.value='';
   }

    else if(number === '<'){
        const digitNumber =previousNumber.split(' ');
        digitNumber.pop();
        const remainigDigits=digitNumber.join(' ');
        typesNumberField.value =remainigDigits;
   }
}
    else{
    
    
        const newNumber = previousNumber + number;
        typesNumberField.value=newNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displayField=document.getElementById('display-pin');
    const currentField =displayField.value;

    const typesNumberField =document.getElementById('types-number');
    const typeNumber = typesNumberField.value;

    const pinMessage = document.getElementById('pin-Message');
    const pinMessages = document.getElementById('pin-field');
    if(typeNumber === currentField){
       
       pinMessage.style.display='block';
       pinMessages.style.display='none';
    }
    else{
       
       pinMessages.style.display='block';
       pinMessage.style.display='none';
    }
})
