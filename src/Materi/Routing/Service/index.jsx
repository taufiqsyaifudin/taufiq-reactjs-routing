import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
  const match = useRouteMatch();

  return (
    <div className="main">
      <h2>Service Page</h2>
      <ul>
        <li><Link to={`${match.url}/computer`}>Computer</Link></li>
        <li><Link to={`${match.url}/smartphone`}>Smartphone</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path={`${match.url}/computer`}>
          komputer, CPU, monitor, dll
        </Route>
        <Route path={`${match.url}/smartphone`}>
          ASUS, IPhone, Xiaomi, dll
        </Route>
      </Switch>
    </div>
  )
}

export default Service;