import React, {Component} from 'react';
import BottomNav from "./BottomNav";
import "../css/Category.css";
import { Tabs,} from 'antd-mobile';


export default class Category extends Component{
	constructor(props){
		super(props);
		// 修正指针
		this.back = this.back.bind(this);
	}
	// 封装函数
	back(){
		 window.history.back();
	}
	render(){
		const tabs = [
		  { title: '1 Tab' },
		  { title: '2 Tab' },
		  { title: '3 Tab' },
		];
		return(
			<div>
				<div className="header">
	              <div className="head">
	                <div onClick={this.back} className="logo">
	                  <i className="iconfont icon-back"></i>
	                </div>
	                <div className="search">
	                	分类
	                </div>
	                <div style={{marginRight:"0.1rem"}}>
	                  <i className="iconfont icon-iconfontfaxian"></i>
	                </div>
	              </div>
	            </div>
	             {/*Cat-centent*/}
	            <div className="cat-cent" style={{ height: 200 }}>
					    <Tabs tabs={tabs}
					      initalPage={'t2'}
					      tabBarPosition="left"
					      tabDirection="vertical"
					      swipeable={true}
					    >
					      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
					        Content of first tab
					      </div>
					      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
					        Content of second tab
					      </div>
					      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
					        Content of third tab
					      </div>
					    </Tabs>
	            </div>
				<BottomNav />
			</div>
		)
	}
}