const forms = document.forms;

// forms.profile.username.addEventListener('input', function(){
//     console.log(this.value);
//     document.querySelector('#username').innerText = this.value;
// })

// // forms.profile.team.addEventListener('input', function(){
// //     document.body.style.backgroundColor = this.value;
// // });
// forms.profile.id.addEventListener('input', function(){
//     document.querySelector('#id').innerText = `the id for this user is ${this.value}`;
// });

forms.profile.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(this.username.value);
  fetch('https://24a0-2601-205-380-1c10-7999-88d4-13dc-381.ngrok.io', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.username.value})
  })
  .then(res => res.text()).then(data => {
      console.log(data);
  });

});

forms.questions.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(this.qText.value);
    fetch('https://24a0-2601-205-380-1c10-7999-88d4-13dc-381.ngrok.io', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({question: this.qText.value})
    })
    .then(res => res.text()).then(data => {
        console.log(data);
    });

});