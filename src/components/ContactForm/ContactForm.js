import { useState } from 'react';
import style from '../ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { addContacts } from 'redux/contacts/contacts-operations';
import { getAllContacts } from 'redux/contacts/contacts-selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getAllContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    const controlName = event.currentTarget.name.value;
    event.preventDefault();
    if (onCheckName(controlName)) {
      alert(`${controlName} is already in contacts`);
    } else {
      dispatch(addContacts({ id: nanoid(), name, number }));
    }
    clearForm(controlName);
  };

  const clearForm = name => {
    if (onCheckName(name)) {
      setName('');
    } else {
      setName('');
      setNumber('');
    }
  };

  const onCheckName = name => {
    if (!allContacts) {
      return;
    }
    const normalizeName = name.toLowerCase();
    const checkname = allContacts.filter(
      contact => contact.name.toLowerCase() === normalizeName
    );
    if (checkname.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.lable}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={style.lable}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
