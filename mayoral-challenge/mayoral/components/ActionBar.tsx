import SearchField from "./SearchField";
import ViewChanger from "./ViewChanger";
import styles from "../styles/ActionBar.module.css";
import SortPrice from "./SortPrice";

type ActionBarProps = {
  onClick: ({ type }: { type: string }) => void;
  onChange: (text: string) => void;
  searchValue: string;
};

const ActionBar = ({ onClick, onChange, searchValue }: ActionBarProps) => {
  return (
    <>
      <div className={styles.main}>
        <div style={{ width: "33%" }}>
          <SearchField
            onChange={(text: string) => onChange(text)}
            value={searchValue}
          />
        </div>
        <div style={{ width: "33%", textAlign: "left" }}>
          <SortPrice />
        </div>
        <div style={{ width: "33%", textAlign: "right" }}>
          <ViewChanger
            onClick={({ type }: { type: string }) => onClick({ type })}
          />
        </div>
      </div>
    </>
  );
};

export default ActionBar;
