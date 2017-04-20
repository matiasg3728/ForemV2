import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import CompletedDocument from './CompletedDocuments'


module.exports=(
	<Route path='/' component={App}>
		<Route path='/' component={SideBar}>
			<Route path='/' component={CompletedDocument}/>{/*This component will hold namesubmit and the list of docs*/}
			<Route path='/work/:Doc_ID' component={Copy}>{/*This component will hold the copy buttons but not the list bc the list changes depending on the url alot*/}
				<Route path='/work/:Doc_ID/:Copy_ID' component={CopyList}/>{/*When u click on a list element its going to change the url so u can keep track of the copy u are on from the url*/}
			</Route>
		</Route>
		<Route path='/work/:Doc_ID' component={TextEditor}/>
	</Route>

)


// <Router>
// 		<App/>
// 	</Router>
// 	)