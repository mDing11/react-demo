import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,Link, Switch } from 'react-router-dom';
import HomePage from './HomePage';
// import { } from "antd";

const Home =() => <div>首页</div>
const UsersPage = () => <div>Users Page</div>
const Car = () => <div>Car</div>

const App = () => (
  <BrowserRouter>
  <header>
    <Link to="/">首页</Link>
    <Link to="/users">用户</Link>
    <Link to="/shop">商铺</Link>
  </header>
    <div className="primary-layout">
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/shop"  component={HomePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/car" component={Car} />
      </Switch>
  </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))