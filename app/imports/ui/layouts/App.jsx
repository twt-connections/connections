import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import FooterMenu from '../components/FooterMenu';
import Connections from '../pages/Connections';
import BrowseProfiles from '../pages/BrowseProfiles';
import CompanyHome from '../pages/CompanyHome';
import CompanyProfile from '../pages/CompanyProfile';
import EditCompanyProfile from '../pages/EditCompanyProfile';
import AddProfile from '../pages/AddProfile';
import AddCompanyProfile from '../pages/AddCompanyProfile';
import BrowseListings from '../pages/BrowseListings';
import StudentHome from '../pages/StudentHome';
import StudentProfile from '../pages/ListStudentProfile';
import EditStudentProfile from '../pages/EditStudentProfile';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import AdminHome from '../pages/AdminHome';
import AllStudentProfiles from '../pages/AllStudentProfiles';


/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Connections}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/studentHome" component={StudentHome}/>
              <ProtectedRoute path="/companyHome" component={CompanyHome}/>
              <ProtectedRoute path="/browseProfiles" component={BrowseProfiles}/>
              <ProtectedRoute path="/allStudentProfiles" component={AllStudentProfiles}/>
              <ProtectedRoute path="/browseListings" component={BrowseListings}/>
              <ProtectedRoute path="/addProfile" component={AddProfile}/>
              <ProtectedRoute path="/addCompanyProfile" component={AddCompanyProfile}/>
              <ProtectedRoute path="/editStudentProfile/:_id" component={EditStudentProfile}/>
              <ProtectedRoute path="/editCompanyProfile/:_id" component={EditCompanyProfile}/>
              <AdminProtectedRoute path="/admin" component={AdminHome}/>
              <ProtectedRoute path="/profile" component={StudentProfile}/>
              <ProtectedRoute path="/company" component={CompanyProfile}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <FooterMenu/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
