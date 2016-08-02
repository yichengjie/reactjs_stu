import React,{Component} from 'react';
//--api
import AnswerMultipleChoiceQuestion from './components/AnswerMultipleChoiceQuestion.jsx' ;
import FormItem from './components/FormItem.jsx' ;

var arrayOfChoices = [
	'苹果',"香蕉","橘子"
] ;
function onCompleted (value){
	console.info('你选择了最喜欢的水果 : ' + value) ;
}
class App extends Component {
  constructor(props) {
    super(props) ;
		this.state = {
			serviceType:"T"
		}
  }
  render(){
    return (
      <div>
        <AnswerMultipleChoiceQuestion value ="橘子"
          choices ={arrayOfChoices} onCompleted = {onCompleted}/>
        <FormItem typeList ={["F","M","T"]}  serviceType ={this.state.serviceType} />
      </div>
    ) ;
  }
}

export default App ;
