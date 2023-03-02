import menu from "./items.json";
import Item from "./Item";
import styles from "./Items.module.css";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filter: number | null;
  order: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filter, order } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== undefined) return filter === id;
    return true;
  }

  function orderBy(newList: typeof menu) {
    switch (order) {
      case "portion":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "amnt_people":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(orderBy(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}
