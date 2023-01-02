import Image from "next/image";
import styles from "../styles/Card.module.css";

type CardProps = {
  srcImg: string;
  altImg?: string;
  description: string;
  Content: React.ReactNode;
};

const DESCRIPTION_MAX_SIZE = 20;

const Card = ({ srcImg, altImg, description, Content }: CardProps) => {
  let descriptionToShow = description ? description : "No hay descripción";
  descriptionToShow =
    descriptionToShow.length > DESCRIPTION_MAX_SIZE
      ? descriptionToShow.substring(0, DESCRIPTION_MAX_SIZE - 1) + "..."
      : descriptionToShow;

  return (
    <div className={styles.cardContainer}>
      <span className={styles.cardImg}>
        <Image src={srcImg} width={180} height={200} alt={altImg || ""} />
      </span>
      <div className={styles.cardDescription}>{descriptionToShow}</div>
      {Content}
      <button className={styles.cardButton}>AÑADIR</button>
    </div>
  );
};

export default Card;
