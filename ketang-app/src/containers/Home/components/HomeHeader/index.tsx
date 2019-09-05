import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.less';
import { Store, Home } from '../../../../store/types'
import actions from '../../../../store/actions/home'
const logo = require('../../../../images/logo.jpg');
interface Props {
    setCategory: any;
    category: string;
}
interface State {
    showList: boolean;
}
class HomeHeader extends Component<Props, State> {
    state = {
        showList: false,
    }
    changeCategory = (e) => {
        let category = e.target.dataset.category;
        console.log('change:', category)
        this.setState({
            showList: !this.state.showList,
        }, () => {
            this.props.setCategory({
                category,
            });
        })


    }
    render() {
        let { showList } = this.state;
        let { category } = this.props;
        console.log(this.props)
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img src={logo} alt="logo" />
                    <div onClick={() => {
                        this.setState({
                            showList: !this.state.showList,
                        })
                    }}>
                        {
                            showList ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                    {
                        showList &&
                            <CSSTransition classNames="fade" timeout={100}>
                                <ul className="menu-list" onClick={this.changeCategory}>
                                    <li className={category == 'react' ? 'active' : ''} data-category="react">
                                        {this.props.category == 'react' ? <i>选中</i> : null}
                                        React
                                    </li>
                                    <li className={category == 'vue' ? 'active' : ''} data-category="vue">
                                        {this.props.category == 'vue' ? <i>选中</i> : null}

                                        VUE</li>
                                </ul>
                            </CSSTransition>
                    }

                </TransitionGroup>

            </div>
        )
    }
}
export default connect(
    (state: Store): Home => state.home,
    actions,
)(HomeHeader);