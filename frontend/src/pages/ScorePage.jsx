import React, { useContext, useEffect } from 'react'
//import { ScoreContext } from '../context/scoreContext';
import AppBar from '../components/AppBar';
import { UserContext } from '../context/userContext';
import './register.css'

const ScorePage = () => {

    //const {getScore} = useContext(ScoreContext)
    const {getUserProfile, userProfile} = useContext(UserContext)
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <div>
            <AppBar/>
            <div className="container">
                <table className="table" style={{marginTop: '100px'}}>
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Score</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       userProfile.score && userProfile.score.length === 0 ? (
                           <>
                                <tr>
                                    <td>you have no answered subject</td>
                                    <td>you have no score yet</td>
                                    <td>you have no remark yet</td>
                                </tr>
                           </>
                       ): (
                            userProfile.score && userProfile.score.map(x => (
                                <tr>
                                    <td>{x.subject}</td>
                                    <td>{x.score}</td>
                                    <td className={x.passed ? 'passed' : 'notpassed'}>{x. passed ? 'PASSED' : 'FAILED'}</td>
                                </tr>
                            ))
                       )
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default ScorePage
