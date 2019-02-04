import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  populatePets = () => {
    return this.props.pets.map( pet => {
      return <Pet
        key={pet.id} 
        onAdoptPet={this.props.onAdoptPet}
        pet={pet} />
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.populatePets()}
      </div>
    )
  }
}

export default PetBrowser
