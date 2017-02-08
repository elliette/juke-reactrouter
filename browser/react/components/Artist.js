import React from 'react';
import {Link} from 'react-router';


export default class Artist extends React.Component{
	constructor(props){
		super(props); 
		console.log("artist props", props); 
		console.log("Artist?", this.props.artist); 

	}

	componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    console.log("artistId", artistId);
    const selectArtist = this.props.selectArtist; 
    selectArtist(artistId);
  }

	render(){
		return (
			<div>
			  <h3>{this.props.artist.name}</h3>
			  <h4>ALBUM</h4>
			  <h4>SONGS</h4>
			</div>
		)
	}
}