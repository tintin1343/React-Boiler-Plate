import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
	render () {
		const styles = {
			image: {
				width: '100%',
				height: 200,
				background: 'url('+ this.props.imgUrl + ') center/cover',
			},
			title: {
				color: 'yellow',
			}
		};


		return (
		<div>
			<div style={styles.image}>
				<h2 style={styles.title}>{this.props.title}</h2>
			</div>
			<div>{this.props.msg}</div>
		</div>);
	}
}

export default Card;