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
    randomMake = this.carList[Math.floor(this.length*Math.random)].Make;
    constructor(carMake = randomMake, carModel = randomModel, carYear = randomYear, carColor = randomColor) {
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

new Car('Ford', 'Fusion', '2009', 'Red')
new Car('Ford', 'Fusion', '2009', 'Green')
new Car('Ford', 'Fusion', '2009', 'Yellow')
new Car('Ford', 'Fusion', '2009', 'Blue')
new Car()