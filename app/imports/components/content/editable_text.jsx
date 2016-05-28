import React from 'react'
import autoBind from 'react-autobind'
import { TextFieldAutoSave } from '../forms/text_field_autosave'

export class EditableText extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      editing: false
    }
    autoBind(this)
  }

  // updateInputValue(e){
  //   this.setState({inputValue: e.target.value})
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   this.props.handleSubmit(this.state.inputValue)
  //   this.setState({inputValue: ""})
  // }

  toggleEditMode(){
    this.setState({ editing: !this.state.editing })
  }

  render() {
      return this.state.editing?
        <TextFieldAutoSave 
          textValue={this.props.note.title}
          doneEditing={this.toggleEditMode}
          {...this.props}
        />
      :
        <span className="clickable" onClick={this.toggleEditMode}>{this.props.viewBlock}</span>
        
  }
}

EditableText.propTypes = { 
  viewBlock: React.PropTypes.object.isRequired,
  editing: React.PropTypes.bool
}

EditableText.defaultProps = {
  editing: false
}

// <TextFieldAutoSave
//           autoFocus={true}
//           {...this.props}
//         />

        // <TextFieldAutoSave
        //   autoFocus={true}
        //   inputValue={this.props.editableText}
        //   handleUpdates={this.props.handleUpdates}
        //   field={this.props.field}
        // />