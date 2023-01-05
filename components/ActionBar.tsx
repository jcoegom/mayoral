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
        <SearchField
          onChange={(text: string) => onChange(text)}
          value={searchValue}
        />

        <SortPrice onChange={onChangeSortPrice} value={valueSortPrice} />
        <div className={styles.viewerChanges}>
          <ViewChanger
            onClick={({ type }: { type: string }) => onClick({ type })}
          />
        </div>
      </div>
    </>
  );
};

export default ActionBar;
