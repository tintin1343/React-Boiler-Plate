import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
	render () {
		return (
		<div>
			<div style={{background: 'url('+ this.props.imgUrl + ') center/cover'}}>
				<h2>{this.props.title}</h2>
			</div>
			<div>{this.props.msg}</div>
		</div>);
	}
}

export default Card;