import React from 'react'
import './questionCard.css'

const QuestionCard = (props) => {
    const {subjectTitle, question, answer, next, prev, currentIndex, questions, onAnswer, selected} = props
    return (
            <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>{subjectTitle} Quiz</h4><span>({currentIndex + 1} of {questions.length})</span>
                            </div>
                        </div>
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row align-items-center question-title">
                                <h3 className="text-danger">Q.</h3>
                                <h5 className="mt-1 ml-2">{question}</h5>
                            </div>
                            {answer && answer.map(x => (
                                // <div className="form-check" key={x.id}>
                                //     <input onChange={onAnswer} checked={selected.includes(x.id) ? true : false} className="form-check-input" type="radio" name={x.answer} id={x.id} value={x.id}/>
                                //     <label className="form-check-label" htmlFor="flexRadioDefault1">
                                //         {x.answer} 
                                //     </label>
                                // </div>
                                <div className="ans ml-2" key={x.id}>
                                    <button className={selected.includes(x.id) ? 'buttonn' : 'button'} type='button' value={x.id} onClick={onAnswer}>
                                        {x.answer} 
                                    </button>
                                </div> 
                            ))}
                           
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                            {
                                currentIndex === 0 ? '' : (
                                    <button onClick={prev} className="btn btn-danger d-flex align-items-center btn-danger" type="button">previous</button>
                                )
                            }
                            {
                                questions.length === currentIndex + 1 ? '' : (
                                    <button onClick={next} className="btn btn-primary border-success align-items-center btn-success" type="button">Next</button>
                                )
                            }
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
