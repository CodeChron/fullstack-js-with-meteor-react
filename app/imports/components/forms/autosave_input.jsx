import React from 'react'
import autoBind from 'react-autobind'
import _ from 'lodash'
// import { MultiLineContentEditor } from './multi_line_content_editor'
// import { SingleFieldContentEditor } from './single_field_content_editor'
import { TextBtn } from '../buttons/text_btn'


export class AutoSaveInput extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      textValue: this.props.textValue
    }
    autoBind(this)
  }

  saveChanges(e){
    const updatedValue = e.target.value
    const saveInterval = 300

    this.setState({textValue: updatedValue})

    this.autoSave = this.autoSave || _.throttle(content => {
      this.props.handleUpdates(this.props.note, this.props.field, content)
    }, saveInterval)

    this.autoSave(updatedValue)
  }

  doneEditing(e){
    e.preventDefault()
    this.props.doneEditing()
  }

  handleOnBlur(){
    this.props.doneEditing()
  }

	render() {

    let singleLineForm = <form onSubmit={this.doneEditing}>
             <input
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.textValue}
                onChange={this.saveChanges}
                autoFocus={"true"}
                onBlur={this.handleOnBlur}
              />
             <input type="submit" style={{display:'none'}} />
          </form>

    let multiLineForm = <form className="main-content-editing">
                      <textarea
                        className="flex-main-content"
                        placeholder={this.props.placeholder}
                        value={this.state.inputValue}
                        onChange={this.saveChanges}
                        autoFocus={this.props.autoFocus}
                        onBlur={this.props.doneEditing}
                        onKeyPress={this.handleOnKeyPress}
                      />
                      <div className="form-controls flex-column-centered">
                        <TextBtn
                          title="Done" 
                        />
                        <div className="help-text block-padding">(Or use Shift + Return)</div>
                        </div>
                    </form>

    return this.props.multiline? multiLineForm : singleLineForm
	}
}

AutoSaveInput.propTypes = { 
  textValue: React.PropTypes.string.isRequired,
  multiline: React.PropTypes.bool
}

AutoSaveInput.defaultProps = {
  multiline: false, 
  placeholder: "Write something..."
}


    // return <form className="single-field-submit" onSubmit={this.doneEditing}>
    //                        <input
    //                           type="text"
    //                           placeholder={this.props.placeholder}
    //                           value={this.state.inputValue}
    //                           onChange={this.saveChanges}
    //                           autoFocus={this.props.autoFocus}
    //                           onBlur={this.handleOnBlur}
    //                         />
    //                        <input type="submit" style={{display:'none'}} />
    //                     </form>


    // let multiLineForm = <form className="main-content-editing">
    //                       <textarea
    //                         className="flex-main-content"
    //                         placeholder={this.props.placeholder}
    //                         value={this.state.inputValue}
    //                         onChange={this.saveChanges}
    //                         autoFocus={this.props.autoFocus}
    //                         onBlur={this.props.doneEditing}
    //                         onKeyPress={this.handleOnKeyPress}
    //                       />
    //                       <div className="form-controls flex-column-centered">
    //                         <TextBtn
    //                           title="Done" 
    //                         />
    //                         <div className="help-text block-padding">(Or use Shift + Return)</div>
    //                         </div>
    //                     </form>
