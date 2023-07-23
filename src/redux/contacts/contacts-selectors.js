export const getAllContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const filter = ({ filter }) => filter;

export const getFilteredContacts = ({
  contacts: { contacts, isLoading, error },
  filter,
}) => {
  if (!filter) {
    return contacts;
  }
  const getVisibleContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return visibleContacts;
};
