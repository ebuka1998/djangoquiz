import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ScorePage from './pages/ScorePage';

const App = () => {
    
    return (
        <Router>
           <Switch>
               <Route exact path='/' component={HomePage}/>
               <Route exact path='/quiz/:subject/:id' component={QuizPage}/>
               <Route exact path='/login' component={LoginPage}/>
               <Route exact path='/register' component={RegisterPage}/>
               <Route exact path='/:name' component={ScorePage}/>
           </Switch>
        </Router>
    )
}

export default App
