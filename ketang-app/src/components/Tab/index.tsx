import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './index.less';
export default class Tab extends Component {
    render() {
        return (
            <nav className="footer">
                <NavLink exact to="/" activeClassName="active">
                    <i className="iconfont icon-xingqiu"></i> 首页</NavLink>
                <NavLink exact to="/mine" activeClassName="active">
                    <i className="iconfont icon-react"></i> 我的课程</NavLink>

                <NavLink exact to="/profile" activeClassName="active">
                    <i className="iconfont icon-xiaolian"></i> 资料</NavLink>
            </nav>
        )
    }
}
