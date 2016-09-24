import Reflux from 'reflux';
import $ from 'jquery';
import MotelActions from '../actions/MotelActions';

var MotelStore=Reflux.createStore({
	listenables:[MotelActions],
	motellist:[],

	//inicializar la acción
	init: function(){
		this.fetchlist();
	},
//accion que va a llamar al store cuando se ejecute esta
	fetchlist:function(){
		$.ajax({
			crossDomain: true,
			cache: false,
			context:this,
			url:'https://infinite-atoll-7499.herokuapp.com/api/v1/motel',
			method: 'GET',
			sucess: function(data){
				console.log("Bien hecho!!");
				this.motellist=data.slice();
				this.tigger(this.motellist);
			}
		});
	}

});
export default MotelStore;
