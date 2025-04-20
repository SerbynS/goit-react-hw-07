import { useId } from "react";

import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChangeValue }) {
  const id = useId();

  return (
    <div className={css.SearchBox}>
      <label htmlFor="id">Find contacts by name</label>
      <input type="text" id={id} value={value} onChange={onChangeValue} />
    </div>
  );
}
