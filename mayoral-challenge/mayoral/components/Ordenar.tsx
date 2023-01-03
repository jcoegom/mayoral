import styles from "../styles/Ordenar.module.css";

const Ordenar = () => {
  return (
    <div className={styles.main}>
      <label htmlFor="sort"></label>
      <select className={styles.select} name="sort" id="sort">
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

export default Ordenar;
