import React, { useEffect, useState } from 'react'
import { baseUrl } from '../utils/url'
import axios from 'axios'
import {withRouter} from 'react-router-dom'



const HomeCard = (props) => {
    const [subjects, setSubjects] = useState([])
   

    const getQuiz = async () => {
        try {
            const {data} = await axios.get(`${baseUrl}/api/quiz`)
            if(data){
                setSubjects(data)
            }
        } catch (error) {
            console.log(error);
        }
       
        
    }

    useEffect(() => {
        getQuiz()
        // eslint-disable-next-line
    }, [])


    return (
     
        <div className="card" style={{width: '50rem', margin: 'auto'}}>
            <div className="card-header">
                Subjects
            </div>
            <ul className="list-group list-group-flush">
                {subjects && subjects.map((subject => (
                    <li 
                        key={subject.id} 
                        className="list-group-item" 
                        onClick={() => props.history.push(`/quiz/${subject.subject}/${subject.id}`)}
                        style={{cursor: 'pointer'}}
                    >
                        {subject.subject}
                    </li>
                )))}
            </ul>
        </div>
    )
}

export default withRouter(HomeCard)
