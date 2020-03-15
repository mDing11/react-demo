import React from "react";
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';

const HomePage = props => {
    const List = () => <div>订单</div>
    const Shop = () => <div>商铺</div>

    // let { path, url } = useRouteMatch();
    return (<div>
        {console.log('props', props)}
        <div >
            <Link to={`/shop/list`}>订单</Link>
            <Link to='/car'>购物车</Link>
        </div>
        <div>
            <Switch>
                {console.log(props.match.path)}
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`/shop/list`} component={List} />
                {/* <Route path={`/shop`} component={Shop}/> */}
            </Switch>
        </div>
    </div>)
}

export default HomePage;