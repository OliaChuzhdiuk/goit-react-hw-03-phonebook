import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={e => {
          onDelete(e.target.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};


ContactItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;