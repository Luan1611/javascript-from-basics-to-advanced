class ClientAdress {
    constructor(street, neighborhood, city, state) {
        this.street = street
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    set updateStreet(street) {
        this.street = street
    }
    set updateNeighborhood(neighborhood) {
        this.neighborhood = neighborhood
    }
    set updateCity(city) {
        this.city = city
    }
    set updateState(state) {
        this.state = state
    }
}

let address = new ClientAdress('Dangerous Street', 'Unknow Neighborhood', 'NY', 'NY')

console.log(address)

address.updateStreet = 'Not so dangerous street'
address.updateNeighborhood = 'nice neighborhood'
address.updateCity = 'Los Angeles'
address.updateState = 'California'

console.log(address)