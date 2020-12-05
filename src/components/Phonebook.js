import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  onAddContact = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.onAddContact}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder="Add name"
          ></input>
          <input
            type="phone"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            placeholder="Add number"
          ></input>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default Phonebook;
