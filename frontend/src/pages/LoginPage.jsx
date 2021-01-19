import React, { useContext, useState } from 'react'
import './register.css'
import { UserContext } from '../context/userContext';
import {Link} from 'react-router-dom'

const LoginPage = (props) => {

    const {loginUser, loading, error} = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const onLogin = (e) => {
        e.preventDefault()
        let dataToSubmit = { email, password }
        loginUser(dataToSubmit)

        if(!loading && error == null){
            props.history.push('/')
        }
    }
    return (
        <div>
           <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center" style={{margin:'auto'}}>
                        <div className="col-md-6 col-lg-4">
                            <form className="card" onSubmit={onLogin}>
                                <h5 className="card-title fw-400">Sign In</h5>
                                <div className="card-body">
                                    <div className="form-group"> 
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="Email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        /> 
                                    </div>
                                    <div className="form-group"> 
                                        <input 
                                            className="form-control" 
                                            type="password" 
                                            placeholder="Password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        /> 
                                    </div>
                                    <button type='submit' className="btn btn-block btn-bold btn-primary">Sign in</button>
                                </div>
                            </form>
                            <Link to='/register'>don't have an account? sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
