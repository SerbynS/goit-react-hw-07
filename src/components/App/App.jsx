import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import css from "./App.module.css";

// import userData from "../../userData.json";

import { useState } from "react";

export default function App() {
  const [userData, setUserData] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const handleUpdateUserData = (newUser) => {
    setUserData((prev) => [...prev, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUserData((prev) => prev.filter((user) => user.id !== id));
  };

  const [inputValue, setSearchValue] = useState("");

  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const filterUser = userData.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={handleUpdateUserData} />
      <SearchBox value={inputValue} onChangeValue={handleSearchChange} />
      <ContactList users={filterUser} onDeleteUser={handleDeleteUser} />
    </div>
  );
}
