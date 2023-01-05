import React from "react";
import styles from "../styles/ViewChanger.module.css";

type ViewChangerProps = {
  onClick: ({ type }: { type: string }) => void;
};

const ViewChanger = ({ onClick }: ViewChangerProps) => {
  return (
    <div>
      <img
        onClick={(_e) => onClick({ type: "minus" })}
        className={styles.imgViewChanger}
        style={{ marginRight: "20px" }}
        src="/minus.svg"
        height={20}
      />
      <img
        onClick={(_e) => onClick({ type: "plus" })}
        className={styles.imgViewChanger}
        src="/plus.svg"
        height={20}
      />
    </div>
  );
};

export default ViewChanger;
