import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './appbar.css';
import { UserContext } from '../context/userContext';



const AppBar = () => {
    const {user, loadUser, isAuthenticated, logout} = useContext(UserContext)

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    const logoutUser = () => {
        logout()
    }

    return (
       <div>
           <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid"> 
                    <Link to='/' className="navbar-brand"> <img src="https://img.icons8.com/nolan/48/warning-shield.png" width="30" alt='header' className="logo" /> </Link> 
                    <button style={{color: 'white'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon" ></span> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">  
                            {
                                isAuthenticated ? (
                                    <>
                                        <Link className="nav-link" to='/'>welcome, {user.name}</Link> 
                                        <Link className="nav-link" to={`/${user.name}`}>profile</Link> 
                                        <h6 className="nav-link" style={{cursor: 'pointer'}} onClick={logoutUser}>
                                            logout
                                        </h6> 
                                    </>
                                ) : (
                                    <>
                                        <Link className="nav-link" to='/login'>Login</Link> 
                                        <Link className="nav-link" to='/register'>Register</Link> 
                                    </>
                                )
                            }
                           
                            {/* <Link className="nav-link" to='/'>Reports</Link> 
                            <Link className="nav-link" to='/'>Meet</Link> 
                            <Link className="nav-link" to='/'>Settings</Link>  */}
                            {/* <a className="nav-link" href="#"> <img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle" width="30"/> </a>  */}
                        </div>
                    </div>
                </div>
            </nav>
       </div>
    )
}

export default AppBar
