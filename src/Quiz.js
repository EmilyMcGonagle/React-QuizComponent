import React, {Component} from 'react'

//Loads json file with quiz data, stores in variable
let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props)
        this.setState ={quiz_position: 1}
    }
    render(){
        return(
            //Returns first elements instrutcion text in the quiz data json file 
            <div>
                <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
            </div>
        );
    }

};

export default Quiz