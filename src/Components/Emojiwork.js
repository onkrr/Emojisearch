import React, { Component } from 'react'
import emojiList from "./emojiList.json"
import "./Emojiwork.css"




export class Emojiwork extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            search: ''
        }
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

     
    render() {
        
        const filteredEmojis = emojiList.filter(emojiList => 
         emojiList.title.toLowerCase().includes(this.state.search.toLowerCase()))
        return (
        <div >
                
                <input 
                type="search" 
                onChange={this.onChange} 
                className='Searchbox'
                placeholder='Search Your Emoji'></input>
                <br />
                <br />
                <div className='cardlist'>
                    {filteredEmojis.map( emojiList => 
                    <div className='cards'>
                    <p> {emojiList.symbol} <br></br>{emojiList.title} </p>
                    </div>
                )
                }
        
        </div>
                
                
                    
            </div>
        )
    }
}

export default Emojiwork
