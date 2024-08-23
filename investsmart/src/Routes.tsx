import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./screens/home";
import Stocks from "./screens/stocks";
import StocksDetails from "./screens/stocksDetails";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/stocks" component={Stocks} />
      <Route exact path="/stocksDetails/:symbol" component={StocksDetails} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
