import React, { Fragment, useState } from 'react';
import { Contact } from '../../slice/contactSlice';

interface EditContactCardProps {
  contact: Contact;
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

const EditContactCard: React.FC<EditContactCardProps> = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState<Contact>({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    state: contact.state,
  });

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    phone: '',
    state: '',
  });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Reset validation error for the field being edited
    setValidationErrors(prevState => ({
      ...prevState,
      [name]: '',
    }));
  };

  const handleSave = () => {
    // Perform validation
    let isValid = true;
    const errors: { [key: string]: string } = {};

    if (!editedContact.name.trim()) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!editedContact.email.trim()) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!isValidEmail(editedContact.email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }

    if (!editedContact.phone.trim()) {
      isValid = false;
      errors.phone = 'Phone is required';
    }

    if (!editedContact.state.trim()) {
      isValid = false;
      errors.state = 'State is required';
    }

    if (!isValid) {
      // If any field is invalid, set validation errors and prevent saving
      setValidationErrors(errors);
      return;
    }

    // If all fields are valid, call onSave callback
    onSave(editedContact);
  };

  const isValidEmail = (email: string) => {
    // Very basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <Fragment>
      
    <div className="rounded-lg shadow-md p-4 flex flex-col gap-1" style={{ backgroundColor: "#D0FAC4"}}>
    <h1 className=' text-xl font-bold text-black text-center'>Edit Contact</h1>
      <input
        type="text"
        name="name"
        value={editedContact.name}
        onChange={handleEditChange}
        className={`mb-2 border  rounded p-1 ${validationErrors.name ? 'border-red-500' : 'border-black'}`}
        placeholder="Name"
      />
      {validationErrors.name && <span className="text-red-500 text-sm">{validationErrors.name}</span>}
      <input
        type="email"
        name="email"
        value={editedContact.email}
        onChange={handleEditChange}
        className={`mb-2 border rounded p-1 ${validationErrors.email ? 'border-red-500' : 'border-black'}`}
        placeholder="Email"
      />
      {validationErrors.email && <span className="text-red-500 text-sm">{validationErrors.email}</span>}
      <input
        type="text"
        name="phone"
        value={editedContact.phone}
        onChange={handleEditChange}
        pattern="\d{10}"
        className={`mb-2 border rounded p-1 ${validationErrors.phone ? 'border-red-500' : 'border-black'}`}
        placeholder="Phone"
      />
      {validationErrors.phone && <span className="text-red-500 text-sm">{validationErrors.phone}</span>}
      <select
        name="state"
        value={editedContact.state}
        onChange={handleEditChange}
        className={`mb-2 border rounded p-1 ${validationErrors.state ? 'border-red-500' : 'border-black'}`}
      >
        <option value="">Select state</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      {validationErrors.state && <span className="text-red-500 text-sm">{validationErrors.state}</span>}
      <div className="flex justify-center mt-4">
        <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">Save</button>
        <button onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded">Cancel</button>
      </div>
    </div>
    </Fragment>
  );
};

export default EditContactCard;
