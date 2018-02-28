import React, {Component} from 'react';
import BottomNav from "./BottomNav";

export default class User extends Component{
	render(){
		return(
			<div>
				<h1>我的</h1>
				<BottomNav />
			</div>
		)
	}
}