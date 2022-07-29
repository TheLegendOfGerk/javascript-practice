class Car {
    carList = [
        {Make: 'Ford',
        Model: ['F-Series', 'Fusion', 'Escort', 'Mustang']},
        {Make: 'Honda',
        Model: ['Civic', 'Accord', 'CR-V', 'S660']}, 
        {Make: 'Toyota',
        Model: ['Corolla', 'Tundra', 'Camry', 'Sprinter']},
        {Make: 'Chevy',
        Model: ['Silverado', 'Camaro', 'Bolt', 'Malibu']},
        {Make: 'Nissan',
        Model: ['Sentra', 'Altima', 'Maxima', 'Leaf']},
    ]
    colorsList = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'silver'];

    randomCar () {
        var randomIndex = Math.floor(Math.random()*(this.carList.length))
        var randomMake = this.carList[randomIndex].Make;
        var MODELS = this.carList[randomIndex].Model
        var randomModel = MODELS[Math.floor(Math.random()*(MODELS.length))]
        console.log(randomIndex, randomMake, MODELS, randomModel)
        var randomYear = Math.floor(Math.random()*60 + 1960)
        var randomColor = this.colorsList[Math.floor(Math.random()*this.colorsList.length)]

        return [randomMake, randomModel, randomYear, randomColor];
    }


    constructor(carMake, carModel, carYear, carColor) {
        if(!carMake) {
            var car = this.randomCar();
            carMake = car[0]
            carModel = car[1]
            carYear = car[2]
            carColor = car[3]
        }
        var table = document.getElementById('carTable')
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = carMake;
        cell2.innerHTML = carModel;
        cell3.innerHTML = carYear;
        cell4.innerHTML = carColor;
}

}

// new Car('Ford', 'Fusion', '2009', 'Red')
// new Car('Honda', 'Civic', '1997', 'Green')
// new Car('Toyota', 'Sprinter', '1985', 'Red/Black')
// new Car('Nissan', 'Stanza', '2001', 'Powder Blue')
new Car()
new Car()
new Car()
new Car()
new Car()
