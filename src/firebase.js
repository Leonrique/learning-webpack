/* eslint-disable */
import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDE15LTniiNFiEAAIhcXCZw3kqmULI6zVU",
    authDomain: "fir-vue-dad27.firebaseapp.com",
    databaseURL: "https://fir-vue-dad27.firebaseio.com"
}

const firebaseApp  = Firebase.initializeApp(config)

export const db = firebaseApp.database();
export const usersRef = firebaseApp.database().ref('users')