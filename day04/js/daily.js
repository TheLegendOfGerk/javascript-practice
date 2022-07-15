let firstNum = parseInt(prompt('First number?'));
let secondNum = parseInt(prompt('Second number?'));
console.log(firstNum, secondNum)
if (isNaN(firstNum) || isNaN(secondNum)){
    alert('Oops, we didn\'t recognize your input! Be sure to only use numeric characters. e.g. 1234.');
    location.reload();
}
else {
    if (firstNum > secondNum){
        alert(`The first number, ${firstNum}, is larger!`);}
        else {
            if (firstNum === secondNum){
                alert('The two numbers are the same! They\'re equal! YOU FOOL!!!!!!1')
            }
        else {
            alert(`The second number, ${secondNum}, is larger!`)
        }
        }
    }