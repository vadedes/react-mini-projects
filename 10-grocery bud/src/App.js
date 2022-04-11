import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

/*
  functionality required
  1. Add new list item
    1.1 reset input form after submission
  2. Edit list item
  3. delete list item
  4. show alert
    4.1 basic form validation - if form submited is empty
    4.2 show success message - if form submission is valid
  5. clear all items
  6. same add and retrieve list to or from local storage

  States
  1. list state
  2. Alert state
  3. Name state
  4. editing state - 
  5. editID state - for editing and deleting a specific list item
*/

//get any existing data from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //show alert

  //clearList

  //removeItem

  //edit item

  //useEffect to set list if available in localStorage

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* Add alert message here */}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
      {/* set condition to only show this list when its not empty */}
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  );
}

export default App;
