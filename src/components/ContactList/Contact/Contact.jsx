import css from "./Contact.module.css";

import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";

export default function Contact({ user: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
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
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
