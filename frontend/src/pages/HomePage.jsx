import React from 'react'
import HomeCard from '../components/HomeCard';
import AppBar from '../components/AppBar';

const HomePage = () => {
    return (
        <>
            <AppBar/>
            <div className='container' style={{marginTop:'50px'}}>
                <h1 className='text-center'>Select quiz</h1>
                <HomeCard/>
            </div>
        </>
    )
}

export default HomePage
