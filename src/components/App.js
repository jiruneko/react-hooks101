import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EveentForm from './EventForm'
import Event from './Event'
import operationLogs from './OperatopnLogs'
import AppContext from '../context/AppContext'
import reducer from '../reducers'

const App = () => {
    const initialState = {
        events: [],
        operationLogs: []
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <div className="contaainer-fluid">
                <EventForm />
                <Eveents />
                <OperatopnLogs />
            </div>
        </AppContext.Provider>
    )
}