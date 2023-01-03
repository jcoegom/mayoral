import styles from "../styles/SearchFileld.module.css";

const SearchField = () => {
  return (
    <input placeholder="Search..." type="text" className={styles.searchInput} />
  );
};

export default SearchField;
