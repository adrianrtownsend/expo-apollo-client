import React, { useEffect, useReducer, createContext, useMemo } from 'react'
import firebase from 'firebase'

import { IAction, IAppContext, IAuthActionData, IApiActionData, IState } from './types'

const initialState: IState = {
  user: null,
  loading: true
}

interface IAuth {
  user: object | null
}

const firebaseConfig = {
  apiKey: "####",
  authDomain: "####",
  projectId: "school-app-213a1",
  storageBucket: "####",
  messagingSenderId: "####",
  appId: "####",
  measurementId: "####"
};

const authInitialState: IAuth = {
  user: null
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const authReducer = (prevState: IAuth, action: IAction) => {
  switch(action.type) {
    case 'AUTH_CURRENT_USER':
      console.log('logged in user: ', action.payload.user)
      return ({
        ...prevState,
        user: action.payload.user
      })
    default:
      throw new Error()
  }
}

const reducer = (prevState: IState, action: IAction) => {
  switch(action.type) {
    case 'SET_LOADED': 
      console.log('loaded')
      return ({
        ...prevState,
        loading: action.payload.loading
      })
    case 'SIGN_OUT':
      return initialState
    case 'TEST':
      console.log('testing: ', action.payload)
      return ({...prevState})
    default:
      throw new Error()
  }
}

export const AppContext = createContext<IAppContext | null>(null)

export const AppProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [authState, authDispatch] = useReducer(authReducer, authInitialState)

  useEffect(() => {
    dispatch({
      type: 'SET_LOADED', 
      payload: { 
        loading: true
      }
    })

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      authDispatch({type: 'AUTH_CURRENT_USER', payload: {user: !!user}})
    })

    return () => {
      //unregisterAuthObserver()
      dispatch({
        type: 'IS_LOADED', 
        payload: { 
          loading: false
        }
      })
    }

  }, [])

  /**
   * Amplify Auth Context
   * Run amplify auth actions then pass to reducer
  */
  const authContext = useMemo(() => ({
    
  }), [])

  const navigationContext = useMemo(() => (
    async (data: any) => {
      
    }
  ), [])

  const value: any = {
    authContext,
    //navigationContext,
    state
  }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

/*const appContext = useMemo(() => ({
    createClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    readClass: () => (),
    updateClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user
    }),
    deleteClass: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    createAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    readAssignment: () => (),
    updateAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
    deleteAssignment: async (data) => dispatch({
      type: 'CREATE_CLASS',
      user: data.user,
      input: data.input
    }),
  }), []);

  const subscribeContext = useMemo(() => ({

  }), []);*/