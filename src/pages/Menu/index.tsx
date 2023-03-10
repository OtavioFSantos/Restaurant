import styles from "./Menu.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Order";
import Items from "./Items";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <main>
      <nav className={styles.logo}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Sample text</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <SearchBar search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Items search={search} filter={filter} order={order} />
      </section>
    </main>
  );
}
