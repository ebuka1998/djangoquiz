import React, { createContext, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/url';

export const ScoreContext = createContext()

export const ScoreContextProvider = (props) => {

    const [score, setScore] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const submitQuiz = async (dataToSubmit) => {
        try {
            setLoading(true)
            const {data} = await axios.post(`${baseUrl}/api/createscore`, dataToSubmit)
            if(data){
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

    const getScore = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        try {
            const {data} = await axios.get(`${baseUrl}/api/viewscore`, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ScoreContext.Provider
            value={{
                score,
                loading,
                error,
                setScore,
                submitQuiz,
                getScore,
               
            }}
        
        >
            {props.children}
        </ScoreContext.Provider>
    )
}