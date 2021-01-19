import React, {createContext, useState} from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/url';

export const UserContext = createContext()


export const UserContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const [userProfile, setUserProfile] = useState({})
    const [error, setError] = useState(null)


    const loadUser =  async () => {
        if (localStorage.getItem('access')){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            }

            try {
                const {data} = await axios.get(`${baseUrl}/auth/users/me/`, config)
                setUser(data)
                setIsAuthenticated(true)
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }else{
            setIsAuthenticated(false)
        }
       
    }

    const registerUser = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setLoading(true)
            const {data} = await axios.post(`${baseUrl}/auth/users/`, dataToSubmit, config)
            if(data){
                setLoading(false)
            }
            //setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(`${baseUrl}/auth/jwt/create/`, dataToSubmit, config)
            if(data){
                //console.log(data)
                localStorage.setItem('access', data.access)
                setIsAuthenticated(true)
            }
            loadUser()
        } catch (error) {
            console.log(error)
        }
    }
 
   
    const logout = async () => {
        try {
            await localStorage.clear()
            setIsAuthenticated(false)
            loadUser()
        } catch (error) {
            console.log(error)
        }
    }

    const getUserProfile = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        
        try {
            const {data} = await axios.get(`${baseUrl}/api/userprofile`, config)
            console.log(data[0])
            setUserProfile(data[0])
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <UserContext.Provider
            value={{
                isAuthenticated,
                loading,
                user,
                error,
                userProfile,
                setIsAuthenticated,
                registerUser,
                loginUser,
                loadUser,
                logout,
                getUserProfile,
            }}
        
        
        > 
            {props.children}
        </UserContext.Provider>
    )
}