import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  onAddContact = e => {
    e.preventDefault();
    // this.props.onChange(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.onAddContact}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Add name"
          ></input>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default Phonebook;
