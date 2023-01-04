import React from "react";
import styles from "../styles/AdditionalContent.module.css";

type AdditionalContentProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const AdditionalContent = ({ onClick }: AdditionalContentProps) => {
  return (
    <div onClick={onClick} className={styles.main}>
      Más colores
    </div>
  );
};

export default AdditionalContent;
