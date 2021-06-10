import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import Error from '../pages/Error';


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