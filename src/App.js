import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Form from "./Materi/Form";
import Hooks from "./Materi/Hooks";
import Komponen from "./Materi/Komponen";
import Lifecycle from "./Materi/Lifecycle";
import Rendering from "./Materi/Rendering";
import Reusable from "./Materi/Reusable";
import Routing from "./Materi/Routing";
 
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Routing</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/hooks">Hooks</NavLink></li>
            <li><NavLink to="/komponen">Komponen</NavLink></li>
            <li><NavLink to="/lifecycle">Lifecycle</NavLink></li>
            <li><NavLink to="/rendering">Rendering</NavLink></li>
            <li><NavLink to="/reusable">Reusable</NavLink></li>
            <li><NavLink to="/routing">Routing</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/hooks" component={Hooks}/>
            <Route exact path="/komponen" component={Komponen}/>
            <Route exact path="/lifecycle" component={Lifecycle}/>
            <Route exact path="/rendering" component={Rendering}/>
            <Route exact path="/reusable" component={Reusable}/>
            <Route exact path="/routing" component={Routing}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;