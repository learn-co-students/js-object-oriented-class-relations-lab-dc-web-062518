let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0


class Driver {
  // A driver has many trips, and has many passengers through trips.
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }

}

class Passenger {
  // A passenger has many trips, and has many drivers through trips.
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips () {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers () {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }

}

class Trip {
  // A trip belongs to a driver and belongs to a passenger.
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  // setDriver(driver) {
  // this.driverId = driver.id
  // }

  driver () {
    let scopeDriverId = this.driverId
    return store.drivers.find(function(driver) {
      return driver.id === scopeDriverId 
    })
  }

  passenger () {
    let scopePassengerId = this.passengerId
    return store.passengers.find(function(passenger) {
      return passenger.id === scopePassengerId
    })
  }

}
