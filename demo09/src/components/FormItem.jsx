import React,{Component} from 'react' ;
import _ from 'underscore';

class FormItem extends Component {
   constructor(props) {
     super(props) ;
   }
   render(){
     let {typeList,serviceType} = this.props ;
     let flag =  _.contains(typeList,serviceType) ;
     let retStr = "" ;
     if(flag){//1.判断显隐//2.判断是否可编辑
         retStr = (<div>
           {this.props.children}
         </div>
       );
     }else{
       retStr = (<span className ="hidden">i am hidden input</span> );
     }
     return retStr;
   }
}

export default FormItem ;
