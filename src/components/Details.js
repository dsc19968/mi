import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import "../css/Details.css";
import {
  NavLink
} from 'react-router-dom';

class Details extends Component{
	constructor(props){
		super(props);
		this.state = {
		   data: ['1', '2', '3','4'],
		   imgHeight: 352,
		   slideIndex: 0,
		}
	}
	
    componentDidMount() {
    // simulate img loading
	    setTimeout(() => {
	      this.setState({
	        data: ['https://i8.mifile.cn/v1/a1/2da996b7-4b5d-0b42-917d-fdb27db12dc9!720x792.webp','//i8.mifile.cn/v1/a1/090d6b69-5d8b-2895-85f2-13c22577bede!720x792.webp','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/16c29ae096d0d35eaa8a2139b6ed2bd1.jpg?thumb=1&w=720&h=792','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a5b5500ba1f1a1ed3eade6d83ccd64b4.jpg?thumb=1&w=720&h=792','https://i8.mifile.cn/v1/a1/ed954a23-2c30-98ca-4379-86818f95e75e.jpg'],
	      });
	    }, 100);
  	}
	render(){
		return(
			<div>
				<div style={{width:"100%",height:"3.52rem"}}>
					<Carousel
			          autoplay
			          infinite
			          selectedIndex={0}
			          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
			          // afterChange={index => console.log('slide to', index)}
			        >
			          {this.state.data.map(val => (
			              <img
			              	key={val}
			                src={`${val}`}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' }}
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({ imgHeight: 'auto' });
			                }}
			              />
			          ))}
			        </Carousel>
				</div>
				<div className="goods-info">
					<div className="goods-info-one">
						<div>小米5X 变焦双摄</div>
						<div>
							<font color="#ff4a00">「64GB直降100元」</font>
							光学变焦双摄，拍人更美 / 5.5"大屏轻薄全金属 / 骁龙八核处理器 / 4GB大内存 
						</div>
						<div>
							<b>￥1399</b><del>￥1499</del><span>直降100</span>
						</div>
					</div>
				</div>
				<div className="det-bottom">
					<NavLink exact to="/">
		              <i className="iconfont icon-shouye"></i>
		              <span>首页</span>
		            </NavLink>
		            <NavLink to="/cart">
		              <i className="iconfont icon-gouwuche"></i>
		              <span>购物车</span>
		            </NavLink>
		            <div className="add-cart">
		              <span>加入购物车</span>
		            </div>
				</div>
			</div>
		)
	}
}

export default Details;