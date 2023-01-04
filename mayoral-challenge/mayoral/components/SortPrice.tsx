import styles from "../styles/SortPrice.module.css";

type SortPriceProps = {
  onChange: (value: string) => void;
  value: string;
};

const SortPrice = ({ onChange, value }: SortPriceProps) => {
  return (
    <div className={styles.main}>
      <label htmlFor="sort"></label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
        name="sort"
        id="sort"
      >
        <option className={styles.options} value="">
          Ordenar precio:
        </option>
        <option className={styles.options} value="asc">
          Precio Asc.
        </option>
        <option className={styles.options} value="desc">
          Precio Desc.
        </option>
      </select>
    </div>
  );
};

export default SortPrice;
