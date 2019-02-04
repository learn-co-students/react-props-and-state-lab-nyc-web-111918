import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  //map pets to make Pet components
  makePets = () => {
    return this.props.pets.map((pet, index) => {
      return <Pet key={index} onAdoptPet={this.props.onAdoptPet} pet={pet} isAdopted={false}/>
    })
  }

  render() {
    return <div className="ui cards"> {this.makePets()} </div>
  }
}

export default PetBrowser
