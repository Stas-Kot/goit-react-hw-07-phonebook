import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { fetchContacts, deleteContact } from 'redux/phonebook-operations';
import selectors from 'redux/phonebook-selectors';

export default function ContactList() {
  const contacts = useSelector(selectors.getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  handleDelete: PropTypes.func,
};
