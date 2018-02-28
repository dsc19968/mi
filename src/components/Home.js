import React, {Component} from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';
import "../css/Home.css";
// import axios from 'axios';
import Recommend from "./Recommend";
import Phone from "./Phone";
import BottomNav from "./BottomNav";


export default class Home extends Component{
  constructor(props){
    super(props);
    //修正指针
    this.skip_user = this.skip_user.bind(this);
  }

  // 封装函数
  skip_user(){
    this.props.history.push("/user");
  }


  render(){
    const tabs = [
      { title: '推荐', sub: '1' },
      { title: '手机', sub: '2' },
      { title: '智能', sub: '3' },
      { title: '电视', sub: '4' },
      { title: '智能', sub: '5' },
      { title: '电脑', sub: '6' },
      { title: '全面屏', sub: '7' },
      { title: '生活周边', sub: '8' },
      { title: '盒子', sub: '9' },
      { title: '艺术', sub: '10' },
    ];

    return(
          <div>
            <div className="header">
              <div className="head">
                <div className="logo">
                  <i className="iconfont icon-xiaomi"></i>
                </div>
                <div className="search">
                  <div>
                    <i className="iconfont icon-iconfontfaxian"></i>
                    搜索商品名称
                  </div>
                </div>
                <div onClick={this.skip_user} className="user">
                  <i className="iconfont icon-wode"></i>
                </div>
              </div>
            </div>
            <div className="content">
              <WhiteSpace />
                <Tabs tabs={tabs}
                  initialPage={0}
                  swipeable={false}
                  // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <div>
                    <Recommend />
                  </div>
                  <div>
                    <Phone />
                  </div>
                </Tabs>
              <WhiteSpace />
            </div>
            <BottomNav />
          </div>
    )
  }
}