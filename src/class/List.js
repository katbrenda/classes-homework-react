import React from "react";
import ArtistForm from "./ArtistForm";
import {Songdiv} from "../style-components/style";
import { Button } from "react-bootstrap";
import '../App.css';



class List extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      artists: [
        { name: "Timaya", song: "Balance" },
        { name: "Penguins", song: "Polar Bears" },
      ],
      showForm: true,
    };
  }

  addArtist=(artist)=>{
    
    let updateArtists = [artist, ...this.state.artists]
    this.setState({
        artists:updateArtists
    })
  }

   

  deleteArtist = (artistName)=>{
      let filteredArtists = this.state.artists.filter(a => a.name !== artistName)
      this.setState({
          artists:filteredArtists
      })
  }

  renderArtists = () => {
    return this.state.artists.map((a) => {
      return (
        
        <Songdiv key= {a.name} className="border">
         
          <h1>{a.name}</h1>
          <p>{a.song}</p>
          {/* <button onClick={()=>this.deleteArtist(a.name)}>delete</button> */}
          <Button onClick={()=>this.deleteArtist(a.name)} as="input" type="Delete" value="Delete" />{' '}
      
        </Songdiv>
        
      );
    });
  };
  toggleForm =()=>{
      this.setState({
          showForm: !this.state.showForm
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
        {this.state.showForm && <ArtistForm addArtist={this.addArtist} />}
        <h1>List</h1>

        {this.renderArtists()}
      </div>
      
    );
  }
}

export default List