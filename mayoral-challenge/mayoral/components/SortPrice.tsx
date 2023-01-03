import styles from "../styles/SortPrice.module.css";

const SortPrice = () => {
  return (
    <div className={styles.main}>
      <label htmlFor="sort"></label>
      <select
        value={""}
        onChange={(e) => console.log(e.target.value)}
        className={styles.select}
        name="sort"
        id="sort"
      >
        <option className={styles.options} value="">
          Ordenar precio:
        </option>
        <option className={styles.options} value="asc">
          Precio Ascendente
        </option>
        <option className={styles.options} value="desc">
          Precio Descendente
        </option>
      </select>
    </div>
  );
};

export default SortPrice;
