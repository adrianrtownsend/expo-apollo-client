import firebase from 'firebase/app'
import 'firebase/auth'


export const makeGoogleCredential = (googleUser: any) => {
  // [START auth_make_google_credential]
  const credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.getAuthResponse().id_token)
  // [END auth_make_google_credential]
}

export const signOut = () => {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}

const authStateListener = () => {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  })
  // [END auth_state_listener]
}

const currentUser = () => {
  // [START auth_current_user]
  const user = firebase.auth().currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }
  // [END auth_current_user]
}

const signInWithPopup = () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  })
}