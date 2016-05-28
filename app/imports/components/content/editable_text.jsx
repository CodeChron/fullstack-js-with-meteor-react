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

  setEditMode(){
    this.setState({ editing: true })
  }

  render() {
      return this.state.editing?
        <TextFieldAutoSave
          autoFocus={true}
          inputValue={this.props.editableText}
          handleUpdates={this.props.handleUpdates}
          field={this.props.field}
        />
      :
        <span className="clickable" onClick={this.setEditMode}>{this.props.viewBlock}</span>
        
  }
}

EditableText.propTypes = { 
  viewBlock: React.PropTypes.object.isRequired,
  editing: React.PropTypes.bool
}

EditableText.defaultProps = {
  editing: false
}
