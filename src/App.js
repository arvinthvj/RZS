import logo from "./logo.svg";
import "./App.css";
import LandingScreen from "./LandingScreen";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarryForwarded from "./CarryForwarded";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const provider = new GoogleAuthProvider();
// import {app} from './firebaseConfig.js'

function App() {
const [login, setLogin] = useState({});
var [allRestaurantDataWithMenus, setAllRestaurantDataWithMenus] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyD3_64wW5imeZMYBPp-Lp4Izi-3a_zczUs",
    authDomain: "zomatoapi-d7b96.firebaseapp.com",
    projectId: "zomatoapi-d7b96",
    storageBucket: "zomatoapi-d7b96.appspot.com",
    messagingSenderId: "177082644351",
    appId: "1:177082644351:web:e5207911f1d74d26148c4a",
    measurementId: "G-8JQ8QJV0NB",
  };
  initializeApp(firebaseConfig);

  window.googleProvider =()=> {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        debugger;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setLogin(result)
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  
  

  
  useEffect(() => {
    async function getFoodData() {
      var foodData = await axios.get(
        "https://rcz-backend-arvinth.herokuapp.com/api/allResorts"
      );
      console.log(foodData.data);
      setAllRestaurantDataWithMenus(foodData.data);
    }

    getFoodData();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <LandingScreen all_data={allRestaurantDataWithMenus} logInData = {login} />
            
            <div className='sign-in-button'></div>
          </Route>
        </Switch>

        <Switch>
          <Route path='/category-nv'>
            <CarryForwarded all_data={allRestaurantDataWithMenus} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
