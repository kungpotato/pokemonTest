import React, {Component} from 'react'
import pokemonListService from '../services/pokemonListService'
import Helper from '../helpers/functionHelper'
import memoize from "memoize-one";

class PokemonCard extends Component {
    constructor(props){
        super(props)
        this.state={
            pokemonDetails: [],
            filterText:''
        }
        this.displayPokemon= []

        this.onSelectData = this.onSelectData.bind(this)
        this.CloseModal = this.CloseModal.bind(this)
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const res = await pokemonListService.getPokemonCard()
        this.setState({pokemonDetails: res.cards})
        return res
    }

    onSelectData(pokeItem){
        let data = this.state.pokemonDetails

        this.displayPokemon.push(pokeItem)

        for(let i=0; i<data.length; i++){
            if(data[i] === pokeItem){
                delete data[i]
            }
        }
        this.setState({pokemonDetails: data})
    }

    CloseModal(){
        this.props.handleCloseModal(this.displayPokemon)
    }

    handleChange = event => {
        this.setState({ filterText: event.target.value });
    };

    filter = memoize(
        (list, filterText) => list.filter(item => item.name.includes(filterText))
    );

    render() {
        const {pokemonDetails} = this.state
        const filteredList =  this.filter(pokemonDetails, this.state.filterText);
        
        return(
           <div style={{padding: "50px"}}>
            <button onClick={this.CloseModal}>Save</button>
            <div> Search pokemon: <input onChange={this.handleChange} value={this.state.filterText} /></div>
            <h1 style={{textAlign:"center", width:'100%'}}>My Pokemon List</h1>
            {!Helper.isNull(filteredList) && filteredList.map(val => {
                return (
                    <div key={val.id} className="card">
                        <div className="container-card">
                            <div className="warp-item">
                                <span><img src={val.imageUrl} style={{width:'45%',display:'inline-block'}}/></span>
                                <span style={{display:'inline-block'}}>
                                    <h3 >{val.name}</h3> 
                                    <div >{Helper.setHpLevel(val.hp)}</div>
                                    <div >str</div>
                                    <div >week</div>
                                    <div >week</div>
                                    <button type="button" onClick={() => this.onSelectData(val)}>ADD</button>
                                </span>
                            </div> 
                        </div>
                    </div>
                )
            })}
           </div>
        )
    }
}
export default PokemonCard