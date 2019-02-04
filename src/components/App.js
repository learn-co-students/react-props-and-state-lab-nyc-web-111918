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
  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value}
      })
  }
  onAdoptPet = petId =>{
    const pets = this.state.pets.map(pet => {
      return pet.id == petId ? { ...pet, isAdopted: true } : pet;
    })

    this.setState({
      pets: pets
    });
  }

  onFindPetsClick = (searchTerm) => {
    ///<App /> should fetch a list of pets using fetch().
    if (this.state.filters.type === `all`){
      fetch(`/api/pets`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pets: [...json]
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pets: [...json]
        })
      })
    }
  }

  render() {
    return (
      <div className="ui container">

        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.onFindPetsClick}
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
