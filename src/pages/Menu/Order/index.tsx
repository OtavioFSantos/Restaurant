import styles from "./Order.module.css";
import options from "./options.json";
import classNames from "classnames";
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const nameOrder = order && options.find((op) => op.value === order)?.name;
  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles["order--active"]]: order !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrder || "Order by"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((op) => (
          <div
            className={styles.order__option}
            key={op.value}
            onClick={() => setOrder(op.value)}
          >
            {op.name}
          </div>
        ))}
      </div>
    </button>
  );
}
