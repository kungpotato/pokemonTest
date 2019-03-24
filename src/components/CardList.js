import React, {Component} from 'react'
import Helper from '../helpers/functionHelper'

class PokemonCard extends Component {
    constructor(props){
        super(props)
        this.state={
            allmyPokeData: []
        }

        this.displayMylist = []

        this.onDeleteData = this.onDeleteData.bind(this)
    }

    onDeleteData(param){
        const {mylist} = this.props
        for(let i=0; i< mylist.length; i++){
            if(mylist[i] === param){
                delete mylist[i]
            }
        }
        this.displayMylist = mylist
        this.props.onRemoveItem(this.displayMylist)
    }

    render() {
        const {mylist} = this.props

        return(
            <div style={{padding: "50px"}}>
            <h1 style={{textAlign:"center", width:'100%'}}>My Pokdex</h1>
            {!Helper.isNull(mylist) && mylist.map(val => {
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
                                </span>
                            </div> 
                        </div>
                        <button type="button" onClick={() => this.onDeleteData(val)}>Remove</button>
                    </div>
                )
            })}
           </div>
        )
    }
}

export default PokemonCard