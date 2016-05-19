import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card.jsx';
 
class CardsList extends React.Component {
	render () {
		const welcomeCard = this.props.welcomeCard;
		return(
    	<Card title={welcomeCard.title} imgUrl={welcomeCard.imgUrl} msg={welcomeCard.msg}/>);
    }	
}

export default CardsList;
