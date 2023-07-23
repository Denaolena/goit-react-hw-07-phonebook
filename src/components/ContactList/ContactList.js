import React from 'react';
import ContactElement from '../ContactElement';
import style from '../ContactList/ContactList.module.css';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={style.contactlist}>
      {filteredContacts.map(contact => (
        <ContactElement
          key={nanoid()}
          id={contact.id}
          contact={contact}
          onDeleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
