import React, {Component} from 'react'
import QuizQuestion from "./QuizQuestion.js"
import QuizEnd from "./QuizEnd.js"

//Loads json file with quiz data, stores in variable
let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = { quiz_position: 1}
    }
    render(){
        const isQuizEnd =((this.state.quiz_position -1) === quizData.quiz_questions.length);
        return(
            //Returns first elements instrutcion text in the quiz data json file 
            <div className="QuizQuestion">
                {isQuizEnd ? <QuizEnd />:
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} />}
            </div>
        );
    }

}

export default Quiz