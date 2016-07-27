import React from 'react';
import ReactDom from 'react-dom';
import AnswerMultipleChoiceQuestion from './AnswerMultipleChoiceQuestion.jsx' ;

var arrayOfChoices = [
	'苹果',"香蕉","橘子"
] ;

function onCompleted (value){
	console.info('value : ' + value) ;
}

ReactDom.render(<AnswerMultipleChoiceQuestion value ="橘子" choices ={arrayOfChoices} onCompleted = {onCompleted}/>,
	document.getElementById('app')
) ;
