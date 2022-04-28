import shallow from "zustand/shallow";
import { useStore } from "../store";
import Input from "./Input";

const Search = () => {
  const { search, setSearch } = useStore();
  return (
    <div>
      <h2>Search</h2>
      <Input type='text' value={search} setValue={setSearch}/>
    </div>
  );
};

export default Search;
