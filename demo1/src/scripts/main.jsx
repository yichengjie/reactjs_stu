/**
 * Created by boli on 2016/7/7.
 */
/*import Hello from './hello.jsx';
import World from './word.jsx';*/
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