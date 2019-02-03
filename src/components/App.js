import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
   componentDidMount(){
    fetch('/api/pets')
    .then(r => r.json())
    .then(pets => {this.setState({pets})})
      // let petz = pets.map((pet)=>{
      //   return(
      //     //console.log(pet)
      //
      //     <div key={pet.id}>
      //       <h2>{pet.name}</h2>
      //       <p>{pet.age}</p>
      //       <p>{pet.gender}</p>
      //       <p>{pet.type}</p>
      //       <p>{pet.weight}</p>
      //       <p>{pet.isAdopted.toString()}</p>
      //     </div>
      //   )
      // })
      //console.log("state",this.state.pets)
      //console.log(data)

  }

  onChangeType = (event)=>{
  ///console.log('selecting from app event',event.target.value)
    if(event.target.value === 'cat'){
      //console.log('clicking cat')
      fetch('/api/pets?type=cat')
      .then(r => r.json())
      .then(cats => {this.setState({pets:cats})})
    }  else if (event.target.value === 'dog'){
      fetch('/api/pets?type=dog')
      .then(r => r.json())
      .then(dogs => {this.setState({pets:dogs})})
    } else if (event.target.value === 'micropig'){
      fetch('/api/pets?type=micropig')
      .then(r => r.json())
      .then(pigs => {this.setState({pets:pigs})})
    }  else if (event.target.value === 'all'){
      fetch('/api/pets')
      .then(r => r.json())
      .then(pets => {this.setState({pets})})
    }
  }

  onFindPetsClick = (event)=>{
    console.log('clicking from app onFindPetsClick event', event)
  }

  onAdoptPet = petId =>{
    //console.log(this.state.pets.isAdopted)
    const pets = this.state.pets.map(pet=>{

    //  return pet.id === petId ? {...pet, isAdopted:true} : pet
      // console.log(pet.isAdopted)
      // console.log(event.target.value)
      if(pet.id === petId){
         return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    this.setState({pets},()=>console.log('new state',this.state))
    //console.log('clicking onAdoptPet event in appt',event.target.value)
  }


  render() {
    //console.log(this.state.filters.type)
    //console.log(this.state.pets)
    //console.log('app state',this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                petsFilter={this.state.filters.type}
                onFindPetsClick={this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                />

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
