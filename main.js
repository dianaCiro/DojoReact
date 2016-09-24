import React from 'react';
import ReactDOM from 'react-dom';
import MotelActions from './actions/MotelActions';
import MotelGrid from './components/Motelgrid.jsx';

//cada 5 segundos la página se actualice
setInterval(function(){
	MotelActions.fetchlist();
	},5000);
ReactDOM.render(<MotelGrid />, document.getElementById('app'));
