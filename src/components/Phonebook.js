import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <input placeholder="Add name"></input>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default Phonebook;
