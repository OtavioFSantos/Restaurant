import React from "react";
import styles from "./SearchBar.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className={styles.searchbar}>
      <input
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        placeholder="Search"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
