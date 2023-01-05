import styles from "../styles/SearchFileld.module.css";

type SearchFieldProps = {
  onChange: (text: string) => void;
  value: string;
};

const SearchField = ({ onChange, value }: SearchFieldProps) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder="Buscar..."
      type="text"
      className={styles.searchInput}
    />
  );
};

export default SearchField;
