import React, {Component} from 'react';
import BottomNav from "./BottomNav";
import "../css/Cart.css";

export default class Cart extends Component{
	render(){
		return(
			<div>
				<div className="header">
	              <div className="head">
	                <div onClick={this.back} className="logo">
	                  <i className="iconfont icon-back"></i>
	                </div>
	                <div className="search">
	                	购物车
	                </div>
	                <div style={{marginRight:"0.1rem"}}>
	                  <i className="iconfont icon-iconfontfaxian"></i>
	                </div>
	              </div>
	            </div>
	            <div className="cart-main">
	            	
	            </div>
				<BottomNav />
			</div>
		)
	}
}