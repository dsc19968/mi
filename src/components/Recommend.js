import React, {Component} from 'react';
import { Carousel } from 'antd-mobile';
import "../css/Recommend.css";
import {withRouter} from 'react-router-dom';


class Recommend extends Component {
	constructor(props){
		super(props);
		this.state = {
		    data: ['1', '2', '3'],
		    imgHeight: 160,
		    slideIndex: 0,
	  	}
	  	// 修正指针
	  	this.gotoDetails = this.gotoDetails.bind(this);
	}
	// 封装函数
	gotoDetails(){
		this.props.history.push("/details/:100");
	}
	// 已经载入dom
	  componentDidMount() {
	    // simulate img loading
	    setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	  }
	render(){
		return(
			<div>
				<Carousel
		          autoplay
		          infinite
		          selectedIndex={1}
		          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          // afterChange={index => console.log('slide to', index)}
		        >
		          {this.state.data.map(val => (
		            <a
		              key={val}
		              href="http://www.alipay.com"
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={`//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/42d2ca79ece7a8544c2f879f835712ba.jpg`}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
		        <div className="rec-nav">
		        	<ul>
		        		<li>
		        			<i className="iconfont icon-qiahaoxinxichaxun"></i>
		        			<span>米粉卡</span>
		        		</li>
		        		<li>
		        			<i className="iconfont icon-zuanshi"></i>
		        			<span>新品发布</span>
		        		</li>
		        		<li>
		        			<i className="iconfont icon-miaosha"></i>
		        			<span>限时秒杀</span>
		        		</li>
		        		<li>
		        			<i className="iconfont icon-chakanwuliu"></i>
		        			<span>物流查询</span>
		        		</li>
		        	</ul>
		        </div>
		        <div className="goods">
	                <div className="goods-one">
	                  <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e987fc327b074800a8a7b8df62e742f.jpg?thumb=1&w=358&h=508"  alt="" style={{width:"1.59rem",height:"2.25rem"}} />
	                  <div style={{width:"1.59rem",height:"2.25rem",float:"right"}}>
	                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/62600ea5d917227e8a90172b43de8a23.jpg?thumb=1&w=358&h=252" alt="" style={{width:"1.59rem",height:"1.12rem"}} />
	                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/25274732dc6fa3360bfcac73b02776f1.png?thumb=1&w=358&h=252" alt="" style={{width:"1.59rem",height:"1.12rem",marginTop:"0.01rem"}} />
	                  </div>
	                </div>
	                <div>
	                  <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/87f50572b779a788c106f2011d88d131.jpg?thumb=1&w=720&h=280" alt="" style={{width:"3.20rem",height:"1.25rem", margin:"0.05rem 0"}} />
	                </div>
	                <div>
	                  <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/400fb80ba17c1608a4e213f04a8f0171.jpg?thumb=1&w=720&h=280" alt="" style={{width:"3.20rem",height:"1.25rem", margin:"0.05rem 0"}} />
	                </div>
	                <div>
	                  <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01c6c9eb7941656093b1c0d1f8d5332d.jpg?thumb=1&w=720&h=440" alt="" style={{width:"3.20rem",height:"1.95rem", margin:"0.05rem 0"}} />
	                </div>
	                <div onClick={()=>this.gotoDetails()} style={{position:"relative"}}>
	                  <img src="//i8.mifile.cn/v1/a1/7157c9b2-cc2c-1730-5c85-ba34c3e1720f!720x360.webp" alt="" style={{width:"3.20rem",height:"1.60rem", margin:"0.05rem 0"}} />
	                  <div className="tag">
	                  	<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f80f4607f2bab9fd742f7020e17c5259.png?w=180&h=48" alt="" style={{width:"0.54rem",height:"0.14rem"}} />
	                  </div>
	                  <div className="info">
	                  	<div>
	                  		<div>小米5X 变焦双摄</div>
	                  		<div className="info-price">￥1299起</div>
	                  	</div>
	                  	<div>5.5"大屏轻薄全金属</div>
	                  </div>
	                </div>
	            </div>
			</div>
		)
	}
}

export default withRouter(Recommend);