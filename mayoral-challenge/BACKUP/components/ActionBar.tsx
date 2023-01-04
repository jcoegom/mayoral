import SearchField from "./SearchField";
import ViewChanger from "./ViewChanger";
import styles from "../styles/ActionBar.module.css";
import SortPrice from "./SortPrice";

type ActionBarProps = {
  onClick: ({ type }: { type: string }) => void;
  onChange: (text: string) => void;
  onChangeSortPrice: (value: string) => void;
  valueSortPrice: string;
  searchValue: string;
};

const ActionBar = ({
  onClick,
  onChange,
  onChangeSortPrice,
  valueSortPrice,
  searchValue,
}: ActionBarProps) => {
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
          <SortPrice onChange={onChangeSortPrice} value={valueSortPrice} />
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
