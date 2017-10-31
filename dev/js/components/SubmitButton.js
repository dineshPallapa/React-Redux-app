import React from 'react';

export default class SubmitButton extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
  }
  add() {
  	this.props.onButtonClick(this.state.value);
  	this.setState({value: ''});

  }
  onChange(e) {
  	this.setState({value: e.target.value});

  }
  render() {
  	return(
  		<input 
  			type="text"
  			value={this.state.value}
  			onChange={this.onChange}
  			placeholder={this.props.placeholder}
  		/>
  		<button
        disabled={!this.state.value}
        className="add-item__button"
        onClick={this.add}
      >
  			Add
  		</button>
  	);
  }
}
