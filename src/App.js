import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import IndicesPerformance from './pages/IndicesPerformance';
import StockBasket from './pages/StockBasket';
import StockInfo from './pages/StockInfo';
import Compare from './pages/Compare';
import {Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
        <Switch>
          <Route exact path="/register" component={Register}/>
         <Route exact path="/" component={Main}/>
         <Route exact path="/login" component={Login}/>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/news" component={News} />
        <Route exact path="/indicesperformance" component={IndicesPerformance} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/stockbasket" component={StockBasket} />
        <Route exact path="/stockinfo" component={StockInfo} />
        </Switch>
  );
}

export default App;
