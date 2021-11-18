class Vehicle {
    constructor(brand, year, weight, color) {
        this.brand = brand
        this.year = year
        this.weight = weight
        this.color = color
    }

    brand
    year
    weight
    color

    display() {
        document.getElementById('brand-span').innerHTML = this.brand
        document.getElementById('year-span').innerHTML = this.year
        document.getElementById('weight-span').innerHTML = this.weight
        document.getElementById('color-span').innerHTML = this.color
        document.getElementById('cost-span').innerHTML = this.techView()
    }
    techView() {
        if (this.year <= 2015 || this.weight > 2) {
            return 200 * 1.25;
        } else {
            return 200;
        }
    }
}


let vehicle;

function CreateVehicle() {
    let brand = document.getElementById('brand').value
    let year = document.getElementById('year').value
    let weight = document.getElementById('weight').value
    let color = document.getElementById('color').value

    if (brand == '' || year == '' || weight == '' || color == '') {
        alert('Заполните все поля!')
        return false
    } else {
        vehicle = new Vehicle(brand, year, weight, color)
        document.getElementById('brand').value = ''
        document.getElementById('year').value = ''
        document.getElementById('weight').value = ''
        document.getElementById('color').value = ''

        return true
    }
}

function CreateTechView() {
    if (CreateVehicle()) {
        vehicle.display();
    }
}