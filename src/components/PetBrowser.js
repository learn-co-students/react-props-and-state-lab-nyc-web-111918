import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    //const petsData = console.
    //console.log('pet browser',this.props)
    //console.log('pet browser props are:',this.props.pets)
    return (
      <div className="ui cards">
        {this.props.pets.map(pet=>{
          //console.log(pet)
          return (
            <Pet
              key={pet.id}
              pet={pet}
              onAdoptPet={this.props.onAdoptPet}
              />
          )
        })}
     </div>
   )

  }
}

export default PetBrowser
