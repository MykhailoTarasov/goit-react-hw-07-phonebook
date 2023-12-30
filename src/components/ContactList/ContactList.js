import { useDispatch, useSelector } from 'react-redux';
import { ButtonItem, DeleteIcon, List, ListItem, Text } from './ContactList.Styled';

import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/api';


const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Text>
            {name}: {number}
          </Text>
          <ButtonItem onClick={() => dispatch(deleteContact(id))}>
            <DeleteIcon />
          </ButtonItem>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
