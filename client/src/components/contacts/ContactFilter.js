import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/ContactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (event) => {
    if (text.current.value) {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      ></input>
    </form>
  );
};

export default ContactFilter;
