import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateContact, deleteContact, Contact } from '../../slice/contactSlice';
import ContactCard from './ContactCard';
import EditContactCard from './EditContactCard';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<number | null>(null);

  const startEditing = (id: number) => {
    setEditingId(id);
  };

  const saveEdit = (editedContact: Contact) => {
    dispatch(updateContact(editedContact));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className=" ">
      <h2 className="text-4xl font-bold mb-2">Contact List</h2>

      <hr className="border-t-2 border-gray-600 my-4" />

      {contacts.length === 0 ? (
        <p className='py-10 text-2xl font-bold'>No Contacts Available</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="mb-2">
              {editingId === contact.id ? (
                <EditContactCard
                  contact={contact}
                  onSave={saveEdit}
                  onCancel={cancelEdit}
                />
              ) : (
                <ContactCard
                  contact={contact}
                  onEdit={() => startEditing(contact.id)}
                  onDelete={handleDelete}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
