import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Mine from './Mine'
import Tab from '../components/Tab'
export default class App extends React.Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Home} />
                <Route exact path="/mine" component={Mine} />
                <Route exact path="/profile" component={Profile} />
                <Tab />
            </>
        )
    }
}
