import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
    <div className="ui cards">
      {this.props.pets.map((fetchedPet) => {
        return <Pet key={fetchedPet.id} pet={fetchedPet} isAdopted={fetchedPet.isAdopted} onAdoptPet={this.props.onAdoptPet} />
      })}
    </div>
    )
  }
}


export default PetBrowser
