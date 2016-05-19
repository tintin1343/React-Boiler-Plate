
import React from 'react';
import ReactDOM from 'react-dom';
import MiniDashboard from './components/MiniDashboard.jsx';

// TEST DATA
const testData = {
  welcomeCard: {
    title: 'Welcome to the Starter Kit',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
    imgUrl: 'http://icdn8.digitaltrends.com/image/funny-grumpy-cat-images-hd-wallpaper-1080x611-640x0.jpg'
  },
  cardList: [
    {title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.', imgUrl: 'http://lorempixel.com/500/300/city/'},
    {title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.', imgUrl: 'http://lorempixel.com/500/300/nature/'}
  ]
};

ReactDOM.render( <MiniDashboard welcomeCard={testData.welcomeCard} cards={testData.cardList}/>, document.getElementById('app'));