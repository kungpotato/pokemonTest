import React, { Component } from 'react'
import './App.css'
import PokemonCard from './components/pokemonCard'
import CardList from './components/CardList'
import ReactModal from 'react-modal'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false,
      myCurPokemon: []
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal (currentPokeArr) {
    this.setState({ showModal: false });
    this.setState({ myCurPokemon: currentPokeArr });
  }

  handleOnSelectData(val){
    console.log(val)
  }
  handleRemoveItem(item){
    this.setState({ myCurPokemon: item });
  }

  render() {
    const {myCurPokemon} = this.state
    return (
      <div className="App">
        <button onClick={this.handleOpenModal}>ADD POKEMON</button>
        <CardList mylist={myCurPokemon} onRemoveItem={this.handleRemoveItem}/>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        > 
          <PokemonCard onSelectData={this.handleOnSelectData} handleCloseModal={this.handleCloseModal}/>
        </ReactModal>
      </div>
    )
  }
}

export default App
