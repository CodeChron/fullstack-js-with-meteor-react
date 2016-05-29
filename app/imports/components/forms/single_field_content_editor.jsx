// import React from 'react'
// import autoBind from 'react-autobind'

// export class SingleFieldContentEditor extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       textValue: this.props.textValue
//     }
//     autoBind(this)
//   }

//   handleOnBlur(){
//     this.props.doneEditing()
//   }

//   render() {
//     return <form className="single-field-submit" onSubmit={this.props.doneEditing}>
//          <input
//             type="text"
//             placeholder={this.props.placeholder}
//             value={this.state.textValue}
//             onChange={this.props.saveChanges}
//             autoFocus={"true"}
//             onBlur={this.handleOnBlur}
//           />
//          <input type="submit" style={{display:'none'}} />
//       </form>

//   }

// }

// SingleFieldContentEditor.propTypes = {
//   inputValue: React.PropTypes.string,
//   autoFocus: React.PropTypes.bool,
// }

// SingleFieldContentEditor.defaultProps = { 
//   inputValue:"",
//   autoFocus: true
// }
