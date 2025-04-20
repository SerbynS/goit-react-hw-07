import css from "./Contact.module.css";

export default function Contact({ user: { name, number } }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </>
  );
}
