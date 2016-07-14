import React from 'react';
import ReactDom from 'react-dom';
import CommonBox from './CommonBox.jsx' ;
import {HelloMessage} from './HelloMessage.jsx' ;

/*ReactDom.render(<CommonBox/>,
    document.getElementById('app')
);*/

ReactDom.render(<HelloMessage name ="yicj test"/>,
	document.getElementById('app')
) ;