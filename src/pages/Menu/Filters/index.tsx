import filters from "./filters.json";
import styles from "./Filter.module.scss";
import React from "react";
import classNames from "classnames";

interface op {
  id: number;
  label: string;
}

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectFilter(op: op) {
    if (filter === op.id) return setFilter(null);
    return setFilter(op.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((op) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filter__filter--active"]]: filter === op.id,
          })}
          key={op.id}
          onClick={() => selectFilter(op)}
        >
          {op.label}
        </button>
      ))}
    </div>
  );
}
