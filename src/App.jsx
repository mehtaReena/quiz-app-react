
import {
    BrowserRouter as Router,
    Switch,
    Route
    
  } from "react-router-dom";

  import Quiz from './Quiz';
  import Result from './Result';
  
export default function App(){
   
    return(
        <Router>
            <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
          <Route path="/Result">
            <Result />
          </Route>
          <Route path="/404">
            <h2> Page not found</h2>
          </Route>
        </Switch>



        </Router>
    )
}