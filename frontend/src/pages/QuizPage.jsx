import React, {useContext, useEffect, useState} from 'react'
import { baseUrl } from '../utils/url'
import axios from 'axios'
import QuestionCard from '../components/QuestionCard';
import AppBar from '../components/AppBar';
import { ScoreContext } from '../context/scoreContext';
import { UserContext } from '../context/userContext';
import PromptModal from '../components/PromptModal';
import SubmitModal from '../components/SubmitModal';


const QuizPage = (props) => {

    const subject = props.match.params.subject

    const id = props.match.params.id

    const {submitQuiz, loading, error} = useContext(ScoreContext)
    const {user, loadUser} = useContext(UserContext)

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [questionIndex, setQuestionIndex] = useState(0)
    // const [score, setScore] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    
    const [selected, setSelected] = useState(
        localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")) : []
    )
    const [questionAnswered, setQuestionAnswered] = useState(
        localStorage.getItem("questionAnswered") ? JSON.parse(localStorage.getItem("questionAnswered")) : []
    )

    const [answerdQuiz, setAnsweredQuiz] = useState([])

    const getQuestions = async () => {
        try {
            const {data} = await axios.get(`${baseUrl}/api/question?subject=${subject}`)
            if(data){
                setCurrentQuestion(data[questionIndex])
            }
            setQuestions(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestions()
        // eslint-disable-next-line
    }, [questionIndex])

    useEffect(() => {
       setAnsweredQuiz( localStorage.getItem("answeredQuiz") ? JSON.parse(localStorage.getItem("answeredQuiz")) : [])
       // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    const next = (e) => {
        e.preventDefault()
        setQuestionIndex(questionIndex + 1)
    }

    const prev = (e) => {
        e.preventDefault()
        setQuestionIndex(questionIndex - 1)
    }

    const handleAnswerClick = (e, answer) => {
        const y = answer.answer.filter(x => x.id == e.target.value)[0]
   
        if(questionAnswered.includes(answer.id)){
            //console.log('you have answred this question');
            const found = answer.answer.some(r => !selected.includes(r))

            if(found && !selected.includes(y.id)){
                const k = answer.answer.map(x => x.id)
                const z = selected.filter(x => !k.includes(x))
                setSelected(localStorage.setItem('selected', JSON.stringify([...z, y.id])))

                setSelected(localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")) : [])

            }
             
        }else{
            
            setQuestionAnswered(localStorage.setItem('questionAnswered', JSON.stringify([...questionAnswered, answer.id])))

            setQuestionAnswered(localStorage.getItem("questionAnswered") ? JSON.parse(localStorage.getItem("questionAnswered")) : [])

            setSelected(localStorage.setItem('selected', JSON.stringify([...selected, y.id])))

            setSelected(localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")) : []) 
        }

        if(y.isRight){
            setCorrectAnswers(correctAnswers + 1)
        }else if(!y.isRight && correctAnswers === 0){
            setCorrectAnswers(correctAnswers)
        }else{
            setCorrectAnswers(correctAnswers - 1)
        }

    }

    const cancle = (e) => {
        e.preventDefault()
        setCorrectAnswers(0)
        // localStorage.removeItem('selected')
        // localStorage.removeItem('questionAnswered')
        props.history.push('/')
    }

    const submit = () => {

        if(error){
            alert('error occured')
        }else{
            setAnsweredQuiz(localStorage.setItem('answeredQuiz', JSON.stringify([...answerdQuiz, id])))
            let dataToSubmit = {
                user_id: user.id,
                subject,
                score: correctAnswers
            }
            submitQuiz(dataToSubmit)
            if(!loading){
                props.history.push('/')
            }
        }
       
        
    }
    


    return (
        <>
            <AppBar/>
           
            {
                answerdQuiz && answerdQuiz.includes(id) ? (
                    <div>you have already answered this quiz</div>
                ) : (
                    <>
                        <QuestionCard
                            subjectTitle={currentQuestion.quiz && currentQuestion.quiz.subject}
                            question = {currentQuestion && currentQuestion.question}
                            answer = {currentQuestion.answer && currentQuestion.answer}
                            next={next}
                            prev={prev}
                            currentIndex={questionIndex}
                            questions={questions}
                            onAnswer={(e) => handleAnswerClick(e, currentQuestion)}
                            selected = {selected}
                        />

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button data-toggle="modal" data-target="#exampleModal1" className='btn btn-primary mt-4'>
                                    submit
                                </button>
                                <button type='button' className='btn btn-danger mt-4 ml-3' data-toggle="modal" data-target="#exampleModal">
                                    cancle
                                </button>
                        </div>
                    </>
                )
            }
            <PromptModal exampleModal='exampleModal' cancle={cancle}/>
            <SubmitModal exampleModal1='exampleModal1' submit={submit}/>


               
        </>
    )
}

export default QuizPage
