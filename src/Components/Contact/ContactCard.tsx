import React from 'react';
import { Contact } from '../../slice/contactSlice';

interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onEdit, onDelete }) => {
  return (
    <div className=" bg-slate-900 text-white rounded-lg shadow-md p-4">
      <div><strong className=' text-stone-400 font-semibold  text-xl '>Id:</strong> {contact.id}</div>
      <div><strong className=' text-stone-400 font-semibold  text-xl '>Name:</strong> {contact.name}</div>
      <div><strong className=' text-stone-400 font-semibold  text-xl '>Email:</strong> {contact.email}</div>
      <div><strong className=' text-stone-400 font-semibold  text-xl '>Phone:</strong> {contact.phone}</div>
      <div><strong className=' text-stone-400 font-semibold  text-xl '>Status:</strong> {contact.state}</div>
      <div className="flex justify-center mt-4">
        <button onClick={() => onEdit(contact)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2">Edit</button>
        <button onClick={() => onDelete(contact.id)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
