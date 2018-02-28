import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import "../css/BottomNav.css";

class BottomNav extends Component {
	render(){
		return(
			<footer className="footer">
	            <NavLink exact to="/">
	              <i className="iconfont icon-shouye"></i>
	              <span>首页</span>
	            </NavLink>
	            <NavLink to="/category">
	              <i className="iconfont icon-fenlei"></i>
	              <span>分类</span>
	            </NavLink>
	            <NavLink to="/cart">
	              <i className="iconfont icon-gouwuche"></i>
	              <span>购物车</span>
	            </NavLink>
	            <NavLink to="/user">
	              <i className="iconfont icon-wode"></i>
	              <span>我的</span>
	            </NavLink>
	          </footer>
		)
	}
}

export default BottomNav;