import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../slice/contactSlice";
import { AppDispatch } from "../../store/store";

interface ContactDialogProps {
    closeDialog: () => void;
}

export default function ContactDialog({ closeDialog }: ContactDialogProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [state, setState] = useState<'Active' | 'Inactive'>('Active'); // State for managing active/inactive state
    const [nextId, setNextId] = useState<number>(1); // State to manage the next ID

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addContact({
            id: nextId,
            name,
            email,
            phone,
            state, // Include the state in the contact object
        }));
        setNextId(prevId => prevId + 1);

        setName('');
        setEmail('');
        setPhone('');
        setState('Active'); // Reset state selection
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="p-4 xl:w-[600px] ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone
                    </label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        State
                    </label>
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value as 'Active' | 'Inactive')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button onClick={closeDialog} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">
                    Add Contact
                </button>
            </form>
        </Fragment>
    );
}
