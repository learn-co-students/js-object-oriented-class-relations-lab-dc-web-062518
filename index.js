let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = {drivers: [], passengers : [], trips : []}
class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this)
  }

  trips(){
    let dId = this.id;
    return store.trips.filter(trip=> trip.driverId === dId)
  }

  passengers(){
    return this.trips().map(trip=> trip.passenger())
  }

}

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name

    store.passengers.push(this)
  }

  trips(){
    let pId = this.id
    return store.trips.filter(trip=> trip.passengerId === pId )
  }

  drivers(){
    return this.trips().map(trip=> trip.driver())
  }

}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;



    store.trips.push(this)
  }

  passenger(){
    let passId = this.passengerId

    return store.passengers.find(function (passenger) {
      return passenger.id === passId;
    })
  }

  driver(){
    let elDriverId = this.driverId
    return store.drivers.find(function(driver) {
      return driver.id === elDriverId
    })

  }

}
