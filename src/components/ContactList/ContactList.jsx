import Contact from "./Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Contact user={user}></Contact>
          </li>
        ))}
      </ul>
    </>
  );
}
