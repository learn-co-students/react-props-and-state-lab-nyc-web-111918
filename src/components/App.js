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

  componentDidMount = () => {
    this.fetchPets()
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      this.fetchAllPets()
    } else if (this.state.filters.type === 'cat') {
      this.fetchCats()
    } else if (this.state.filters.type === 'dog') {
      this.fetchDogs()
    } else if (this.state.filters.type === 'micropig') {
      this.fetchMicropigs()
    }
  }

  fetchAllPets = () => {
    fetch("/api/pets")
    .then( r => r.json())
    .then( petData => {
      this.setState({
        pets: petData
      })
    })
  }

  fetchCats = () => {
    fetch("/api/pets?type=cat")
    .then( r => r.json())
    .then( catData => {
      this.setState({
        pets: catData
      })
    })
  }

  fetchDogs = () => {
    fetch("/api/pets?type=dog")
    .then( r => r.json())
    .then( dogData => {
      this.setState({
        pets: dogData
      })
    })
  }

  fetchMicropigs = () => {
    fetch("/api/pets?type=micropig")
    .then( r => r.json())
    .then( micropigData => {
      this.setState({
        pets: micropigData
      })
    })
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map( pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({ pets }, () => console.log(pets))
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
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
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
