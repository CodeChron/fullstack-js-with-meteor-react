import React from 'react'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { IconBtn } from '../buttons/icon_btn'

export const NoteDetails = (props) => {

	const
    handleBackBtnClick = () => history.back(),
    backBtn = <IconBtn icon="glyphicon glyphicon-menu-left" handleClick={handleBackBtnClick} />
    

	return <div id="app-container">
	  <AppHeaderLayout
	  headerLeft={backBtn}
	  pageTitle={props.note.title}
	  />
	  <div id="main-content" className="container">
	    Note details
	  </div>
	</div>
}
