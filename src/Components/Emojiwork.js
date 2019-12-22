import React, { Component } from 'react'
import emojiList from "./emojiList.json"
import "./Emojiwork.css"


function searching(result){
    return function(x){
        return x.title.toLowerCase().includes(result.toLowerCase())
    }
}
export class Emojiwork extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            result: ''
        }
    }

    onChange = (e) => {
        this.setState({
            result: e.target.value
        })
    }
    render() {
        return (
            <div >
                <label for="Search"> Search Here </label>
                <input type="text" onChange={this.onChange}></input>
                {emojiList.filter(searching(this.state.result)).map( emojiList => 
                    <div>
                    <p className="Listdetails">      {emojiList.symbol}  {emojiList.title}       </p>
                    </div>
                )
                }    
            </div>
        )
    }
}

export default Emojiwork
