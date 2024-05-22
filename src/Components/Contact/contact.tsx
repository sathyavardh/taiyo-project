import { Fragment, useRef } from "react";
import ContactDialog from "./ContactDialog";
import ContactList from "./ContactList";

export default function Contact() {
    const dialogRef = useRef<HTMLDialogElement>(null)

    function openDialog() {
        dialogRef.current?.showModal();
    }

    function closeDialog() {
        dialogRef.current?.close();
    }

    return (
        <Fragment>
            <div className=" w-full flex flex-col gap-10 p-5 xl:p-10">
                <div className=" flex justify-between">
                    <h1 className=" text-2xl font-semibold underline underline-offset-4 select-none">Contact</h1>
                    <div onClick={openDialog} className=" bg-red-300 rounded-xl p-2 button">
                        Add new Contact +
                    </div>
                </div>
                <ContactList />
            </div>

            <dialog ref={dialogRef} className="modal rounded-lg">
                <ContactDialog closeDialog={closeDialog} />
            </dialog>
        </Fragment>
    );
}
