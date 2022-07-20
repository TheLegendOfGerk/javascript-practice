function AskPW(){
    const password = prompt('Enter your password! Must be 6-20 character long and start with a letter.');
    const validFirstChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        if (password.length < 5){
            alert('Password is too short! Must be at least 6 characters long.');
            AskPW;}
        else if (password.length > 20){
            alert('Password is too short! Must 20 or fewer characters long.');
            AskPW;}
        else if (!validFirstChar.includes(password[0].toLowerCase())){
            alert('Password is invalid - it must start with a letter');
        }
        else {alert('Password is valid! Awesome work.')}
    };
AskPW();