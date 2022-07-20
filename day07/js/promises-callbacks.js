// callbacks

function outer(callback) {
    console.log(callback);
    callback(1 + 1);
}

outer(function(test) {
    console.log(test)
});

setTimeout(function() {
    console.log('this is the future!')
}, 5000);

function orderPizza (callback) {
    setTimeout(function() {
        callback(('pizza'))
    }, 10000);
}

orderPizza(function(text){
    console.log('please deliver my ' + text + ' to my house');
})

const pizzaPromise = new Promise(function(resolve, reject){
    orderPizza(function(text){
        resolve(text);
    });
    reject('pizza got burnt')
});

pizzaPromise.then(function(answer){
    console.log(answer);
})
.catch(function(err){
    console.log('error', err)
})