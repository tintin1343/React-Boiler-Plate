import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card.jsx';

class CardsList extends React.Component {
	render () {
		const cards = this.props.cards;
		return(
		<div>
		  {cards.map((card, index) =>(
		  	<Card key ={index}
		  	  {... card}
		  	/>  
		  ))}
		</div>);
	}	
}

export default CardsList;