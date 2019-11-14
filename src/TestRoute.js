import React, { Component } from "react";
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import HomePage from './HomePage';

const TestRoute = props => {
    const UsersPage = () => <div>Users Page</div>
    const Users = () => <div>首页</div>
    return (
        <div>
            {console.log(props.match)}
            <p>
            <Link to="/home">首页</Link>
            <Link to="/users">用户</Link>
            </p>
            <div>
            {/* <RouteIndex path="/" Component={HomePage}/> */}
            <Switch>
            <Route path="/users" component={UsersPage} />
            <Route path="/home" Component={Users}/>
            {/* <Redirect to="/home"/> */}
            </Switch>
            </div>
        </div>
    )
}

export default TestRoute;