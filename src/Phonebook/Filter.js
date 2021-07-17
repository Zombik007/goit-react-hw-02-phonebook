import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Search contacts"
          //  value={this.state.filter}
          //  onChange={this.inputChange}
        />
      </>
    );
  }
}

export default Filter;
