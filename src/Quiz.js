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
    showNextQuestion(){
        this.setState((state) => {
            return {quiz_position: state.quiz_position +1}
        })
    }
    render(){
        const isQuizEnd =((this.state.quiz_position -1) === quizData.quiz_questions.length);
        return(
            //If isQuizEnd is true, then run Quiz End, if not then display question  
            <div className="QuizQuestion">
                {isQuizEnd ? <QuizEnd />:
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]}
                showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
            </div>
        );
    }

}

export default Quiz