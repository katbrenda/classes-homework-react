import React from 'react'
import { Formdiv } from '../style-components/style'

class ArtistForm extends React.Component{
    constructor(props){
        super(props)
            this.state={
                name:'',
                song:'',
        
            }
        }
        handleChange=(e)=>{
            console.log('song:', e.target.value)
            console.log('name:', e.target.name)
            this.setState({
                [e.target.name]:e.target.value
            })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)

        this.props.addArtist(this.state)
        
    }
    render(){
        return(
            <Formdiv>
                <h1>ArtistForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>name</p>
                    <input name='name' value={this.state.name} onChange={this.handleChange}/>
                    <p>song</p>
                    <input name='song' value={this.state.song} onChange={this.handleChange}/>
                    <button>add</button>
                </form>
            </Formdiv>
        )
    }
}
export default ArtistForm