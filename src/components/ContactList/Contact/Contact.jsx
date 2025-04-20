import css from "./Contact.module.css";

export default function Contact({ user: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
