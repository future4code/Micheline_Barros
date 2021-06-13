import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage'
import AdminHomePage from '../pages/adminHomePage/AdminHomePage'
import ApplicationFormPage from '../pages/applicationFormPage/ApplicationFormPage'
import CreateTripPage from '../pages/createTripPage/CreateTripPage'
import ListTripsPage from '../pages/listTripsPage/ListTripsPage'
import LoginPage from '../pages/loginPage/LoginPage'
import TripDetailsPage from '../pages/tripDetailsPage/TripDetailsPage'
import Error from '../pages/error/Error';


const Router = () => {

  return(
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route exact path={'/trips/list'}>
          <ListTripsPage />
        </Route>

        <Route exact path={'/trips/application'}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={'/login'}>
          <LoginPage />
         </Route>

        <Route exact path={'/admin/trips/list'}>
          <AdminHomePage />
        </Route>

        <Route exact path={'/admin/trips/create'}>
          <CreateTripPage />
        </Route>

        <Route exact path={'/admin/trips/:id'}>
          <TripDetailsPage />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>  
        
    </BrowserRouter>
  )
}

export default Router;