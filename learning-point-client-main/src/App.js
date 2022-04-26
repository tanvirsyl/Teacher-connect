import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import MoreSubject from './components/Home/MoreSubject/MoreSubject';
import ContactUs from './components/Shared/ContactUs/ContactUs';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import StudentSignup from './components/StudentSignup/StudentSignup';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/SignIn/PrivateRoute';
import TeacherSignup from './components/TeacherSignup/TeacherSignUp';
import AllTeachers from './components/AllTeachers/AllTeachers';
import Details from './components/AllTeachers/Details';
import Ict from './components/SingleSubject/Ict/Ict';
import GeneralMath from './components/SingleSubject/GeneralMath/GeneralMath';
import Physics from './components/SingleSubject/Physics/Physics';
import English from './components/SingleSubject/English/English';
import Accounting from './components/SingleSubject/Accounting/Accounting';
import Economics from './components/SingleSubject/Economics/Economics';
import Marketing from './components/SingleSubject/Marketing/Marketing';
import Finance from './components/SingleSubject/Finance/Finance';
import Chemistry from './components/SingleSubject/Chemistry/Chemistry';
import Biology from './components/SingleSubject/Biology/Biology';
import HigherMath from './components/SingleSubject/HigherMath/HigherMath';
import Civics from './components/SingleSubject/Civics/Civics';
import History from './components/SingleSubject/History/History';
import Geology from './components/SingleSubject/Geology/Geology';


export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState({});
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/more-subject" component={ MoreSubject } />
          <PrivateRoute path="/about" component={ About } />
         
          <Route path="/log-in" component={ SignIn } />
          <Route path="/registration-student" component={ StudentSignup } />
          <Route path="/registration-teacher" component={ TeacherSignup } />

          <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
          <Route path="/contact-us"> <Navigation /> <ContactUs /> <Footer /> </Route>
          <Route path="/all-teacher"> <Navigation /> <AllTeachers /> <Footer /> </Route>
         
          <Route path="/general-math"> <Navigation /> <GeneralMath /> <Footer /> </Route>
          <Route path="/ict"> <Navigation /> <Ict /> <Footer /> </Route>
          <Route path="/physics"> <Navigation /> <Physics /> <Footer /> </Route>
          <Route path="/chemistry"> <Navigation /> <Chemistry /> <Footer /> </Route>
          <Route path="/biology"> <Navigation /> <Biology /> <Footer /> </Route>
          <Route path="/higher-math"> <Navigation /> <HigherMath /> <Footer /> </Route>
          <Route path="/english"> <Navigation /> <English /> <Footer /> </Route>
          <Route path="/civics"> <Navigation /> <Civics /> <Footer /> </Route>
          <Route path="/history"> <Navigation /> <History /> <Footer /> </Route>
          <Route path="/geology"> <Navigation /> <Geology /> <Footer /> </Route>
          <Route path="/accounting"> <Navigation /> <Accounting /> <Footer /> </Route>
          <Route path="/economics"> <Navigation /> <Economics /> <Footer /> </Route>
          <Route path="/marketing"> <Navigation /> <Marketing /> <Footer /> </Route>
          <Route path="/finance"> <Navigation /> <Finance /> <Footer /> </Route>
         
          <PrivateRoute path="/teacher-info/:teacherId"> <Navigation /> <Details /> <Footer /> </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
