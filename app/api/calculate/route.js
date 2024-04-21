import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from './app/LoginPage';
import RegisterPage from './app/RegisterPage';
import HomePage from './components/calculate/HomePage/CarbonFootprintCalculator'; // The component for your home page after login



function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);


  return (
    <Router>
      <Switch>
        {/* Redirect base URL to either home or login based on authentication status */}
        <Route exact path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />}
        </Route>
        <Route path="/">
          {!isAuthenticated ? <Redirect to="/login" /> : <HomePage />}
        </Route>
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

