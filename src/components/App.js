import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, MainTitle, Title } from './Layout';

const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
