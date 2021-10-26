import React, { useEffect, useReducer, createContext, useMemo } from 'react'
//import * as SecureStore from 'expo-secure-store'

import { IAction, IAppContext, IAuthActionData, IApiActionData, IState } from './types'

const initialState: IState = {
  user: null,
  loading: true
}

const reducer = (prevState: IState, action: IAction) => {
  switch(action.type) {
    case 'IS_LOADED': 
      console.log('loaded')
      return ({
        ...prevState,
        loading: false
      })
    case 'SIGN_OUT':
      return initialState
    case 'TEST':
      console.log('testing: ', action.payload)
      return ({...prevState})
    case 'AUTH_CURRENT_USER':
      console.log('logged in user: ', action.payload.user)
      return ({
        ...prevState,
        user: action.payload.user
      })
    default:
      throw new Error()
  }
};

export const AppContext = createContext<IAppContext | null>(null)

export const AppProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: 'IS_LOADED'})
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