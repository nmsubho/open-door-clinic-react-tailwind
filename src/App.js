import './App.css';
import "tailwindcss/tailwind.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
