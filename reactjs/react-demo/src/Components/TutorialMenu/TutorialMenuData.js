const tutorialMenusList = [
    {
        'menutitle': "Simple Counter",
        'menulink': "simple-counter",
        'menusubtitle': `Using useState Hook`,
        'menuinfodata': `
import React from 'react'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import CounterContextProvider from './Context/CounterContextProvider'
import { UserContextProvider } from './Context/UserContext'
import UserAdd from './Components/UserAdd'
import UserShow from './Components/UserShow'
import { DataContextProvider } from './Context/DataContext'
import DataAdd from './Components/DataAdd'
import DataShow from './Components/DataShow'

const SimpleContextApi = () => {

  return (
    <>
      <h2>SimpleContextApi Landing page</h2>
      <br/>
      <hr/>
      <br/>
      <CounterContextProvider>
        <h3>CounterContext and CounterContextProvider are in indivitual files</h3>
        <CardOne/>
        <CardTwo/>
      </CounterContextProvider>
      <br/><br/>
      <hr/>
      <br/>
      <UserContextProvider>
        <h3>UserContext and UserContextProvider are in Same file</h3>
        <UserAdd/>
        <UserShow/>
      </UserContextProvider>
      <br/><br/>
      <hr/>
      <DataContextProvider>
        <h3>DataContext and DataContextProvider are in Same file and create custom hook for useContext</h3>
        <DataAdd/>
        <DataShow/>
      </DataContextProvider>
    </>
  )
}

export default SimpleContextApi

        `
    },
    {
        'menutitle': "Generate Password",
        'menulink': "generate-password",
        'menusubtitle': `Using useState, useEffect, useRef, useCallback`,
    },
    {
        'menutitle': "Simple Context API",
        'menulink': "simple-context-api",
        'menusubtitle': `Using createContext, useContext, useState`,
    },
    {
        'menutitle': "Theme Switcher(light/dark mode)",
        'menulink': "theme-switcher",
        'menusubtitle': `Using createContext, useContext, useState`,
    },
]

export default tutorialMenusList;