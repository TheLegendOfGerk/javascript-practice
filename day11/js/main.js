let bgColor = localStorage.getItem('bgColor') || '#00AADD';
let textColor = localStorage.getItem('textColor') || '#333333';

document.forms.theme.bgColor.value = bgColor;
document.forms.theme.textColor.value = textColor;
document.body.style.color = textColor;
document.body.style.backgroundColor = bgColor;

document.forms.theme.bgColor.addEventListener('change', function(E) {
    console.log(E.target.value, this.value);
    document.body.style.backgroundColor = this.value;
    localStorage.setItem('bgColor', this.value)
//  ^sessionStorage is also an option, but only works for that particular session, i.e. 1 tab.
})
    
document.forms.theme.textColor.addEventListener('change', function(E) {
    console.log(E.target.value, this.value);
    document.body.style.color = this.value;
    localStorage.setItem('textColor', this.value);
})

// sessionStorage.clear(); is an option to clear.
document.getElementById('initializer').addEventListener('click', 
    function resetColors() {
        localStorage.clear();
        document.body.style.color = '#333333';
        document.body.style.backgroundColor = '#00AADD';
        
    })