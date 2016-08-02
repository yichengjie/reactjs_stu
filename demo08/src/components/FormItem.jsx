import React,{Component} from 'react' ;
import _ from 'underscore';

class FormItem extends Component {
   constructor(props) {
     super(props) ;
   }

   render(){
     let {typeList,serviceType} = this.props ;
     console.info("typeList : " , typeList) ;
     console.info("serviceType : " ,serviceType) ;
     let flag =  _.contains(typeList,serviceType) ;
     let retStr = "" ;
     if(flag){
       retStr = <div>hello world</div>;
     }else{
       retStr = "" ;
     }
     return (
      retStr
     ) ;
   }
}

export default FormItem ;
