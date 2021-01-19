import React, { useContext, useState } from 'react'
import './register.css'
import { UserContext } from '../context/userContext';
import {Link} from 'react-router-dom'


const RegisterPage = (props) => {
    const {registerUser, loading, error} = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [re_password, setRe_password] = useState()


    const onRegister = (e) => {
        e.preventDefault()
        let dataToSubmit = { email, name, password, re_password }
        registerUser(dataToSubmit)
        if(!loading && error == null){
            props.history.push('/login')
        }
    }

    return (
        <div>
           <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center" style={{margin:'auto'}}>
                        <div className="col-md-6 col-lg-4">
                            <form className="card" onSubmit={onRegister}>
                                <h5 className="card-title fw-400">Sign Up</h5>
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
                                            type="text" 
                                            placeholder="Name" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                    <div className="form-group"> 
                                        <input 
                                            className="form-control" 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            value={re_password}
                                            onChange={(e) => setRe_password(e.target.value)}
                                        /> 
                                    </div> 
                                    <button type='submit' className="btn btn-block btn-bold btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <Link to='/login'>have an account? sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
