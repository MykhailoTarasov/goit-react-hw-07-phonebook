import { useDispatch, useSelector } from 'react-redux';
import { ButtonItem, DeleteIcon, List, ListItem, Text } from './ContactList.Styled';

import { getContacts, getFilter } from '../../redux/selectors';
import { onDeleteContact } from '../../redux/contactSlice';


const getVisibleContacts = (contacts, filterContact) => {
  if (filterContact === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filterContact);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Text>
            {name}: {number}
          </Text>
          <ButtonItem onClick={() => dispatch(onDeleteContact(id))}>
            <DeleteIcon />
          </ButtonItem>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
