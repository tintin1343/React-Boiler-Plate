import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeCard from '../components/WelcomeCard.jsx';
import CardsList from '../components/CardsList.jsx';

class MiniDashBoard extends React.Component {
	render () {
		return(
		<div>
		 <div>
		   <WelcomeCard welcomeCard={this.props.welcomeCard}/>
		 </div>
		 <div>
		   <CardsList cards={this.props.cards}/>
		 </div>
		</div>);
	}
}

export default MiniDashBoard;