import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Logout from './components/login/Logout'

import RoadsideAssistance from './components/roadside-assistance/RoadsideAssistance'
import RoadsideAssistanceLocation from './components/roadside-assistance-location/RoadsideAssistanceLocation'
import Carousel from './components/carousel/Carousel'
import Memberships from './components/memberships/Memberships'
import Discounts from './components/discounts/Discounts'
import DiscountOffer from './components/discount-offer/DiscountOffer'


import VehicleHealth from './components/vehicle-health/VehicleHealth'
import VehicleHealthHistoryReport from './components/vehicle-health/VehicleHealthHistoryReport'
import VehicleHealthRecalls from './components/vehicle-health/VehicleHealthRecalls'
import VehicleHealthFindAMechanic from './components/vehicle-health/VehicleHealthFindAMechanic'
import VehicleHealthSearchResults from './components/vehicle-health/VehicleHealthSearchResults'


import TransportationAndLodging from './components/transportation-and-lodging/TransportationAndLodging'
import ParkingReminder from './components/parking-reminder/ParkingReminder'
import RepairFacilities from './components/repair-facilities/RepairFacilities'

import Fuel from './components/help/Fuel'
import Tow from './components/help/Tow'
import LockOut from './components/help/LockOut'
import TireChange from './components/help/TireChange'
import JumpStart from './components/help/JumpStart'
import NotSure from './components/help/NotSure'

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)} >
        <Route path="/" component={ Home }>Home</Route>
        <Route path="/roadside-assistance" component={ RoadsideAssistance }>RoadsideAssistance</Route>
        <Route path="/roadside-assistance-location" component={ RoadsideAssistanceLocation }>RoadsideAssistanceLocation</Route>
        <Route path="/carousel" component={ Carousel }>Carousel</Route>
        <Route path="/memberships" component={ Memberships }>Memberships</Route>
        <Route path="/discounts" component={ Discounts }>Discounts</Route>
        <Route path="/discount-offer" component={ DiscountOffer }>DiscountOffer</Route>

        <Route path="/vehicle-health" component={ VehicleHealth }>VehicleHealth</Route>
        <Route path="/vehicle-health-history-report" component={ VehicleHealthHistoryReport }>VehicleHealthHistoryReport</Route>
        <Route path="/vehicle-health-recalls" component={ VehicleHealthRecalls }>VehicleHealthRecalls</Route>
        <Route path="/vehicle-health-find-a-mechanic" component={ VehicleHealthFindAMechanic }>VehicleHealthFindAMechanic</Route>
        <Route path="/vehicle-health-search-results" component={ VehicleHealthSearchResults }>VehicleHealthSearchResults</Route>

        <Route path="/transportation-and-lodging" component={ TransportationAndLodging }>TransportationAndLodging</Route>
        <Route path="/parking-reminder" component={ ParkingReminder }>ParkingReminder</Route>
        <Route path="/repair-facilities" component={ RepairFacilities }>RepairFacilities</Route>

        <Route path="/help-fuel" component={ Fuel }>Fuel</Route>
        <Route path="/help-tow" component={ Tow }>Tow</Route>
        <Route path="/help-lockout" component={ LockOut }>LockOut</Route>
        <Route path="/help-tirechange" component={ TireChange }>TireChange</Route>
        <Route path="/help-jumpstart" component={ JumpStart }>JumpStart</Route>
        <Route path="/help-notsure" component={ NotSure }>NotSure</Route>

        <Route path="/login" component={ Login }>Login</Route>
        <Route path="/logout" component={ Logout }>Logout</Route>

        <Route path="/about" component={ About }>About</Route>
        <Route path="/contact" component={ Contact }>Contact</Route>

      </Router>
    )
  }
}

export default App