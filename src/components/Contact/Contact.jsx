import css from "./Contact.module.css";

import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ user: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div key={id}>
        <p>
          {" "}
          <BsPersonFill />
          {name}
        </p>
        <p>
          {" "}
          <BsTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
