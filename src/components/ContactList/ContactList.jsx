import Contact from "./Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ users, onDeleteUser }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={css.item}>
            <Contact user={user} onDelete={onDeleteUser}></Contact>
          </li>
        ))}
      </ul>
    </>
  );
}
