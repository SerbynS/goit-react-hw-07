import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.SearchBox}>
      <label htmlFor="id">Find contacts by name</label>
      <input type="text" onChange={handleFilter} />
    </div>
  );
}
