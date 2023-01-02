import Card from "../components/Card";
import Pricing from "../components/Pricing";
import AdditionalContent from "../components/AdditionalCotent";
import styles from "../styles/Home.module.css";
import Gap from "../components/Gap";
import React from "react";
import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";

type HomeProps = {
  items: {
    id: number;
    src: string;
    description: string;
    price: number;
    discount: number;
  };
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "/public/data/polos.json");
  const res = await fs.readFileSync(filePath);
  const polos = JSON.parse(res.toString());

  return {
    props: {
      items: polos,
    },
  };
};

export default function Home({ items }: HomeProps) {
  const handleClickAdd = () => {
    alert("CLICK AÑADIR");
  };
  const handleClickMoreColors = () => {
    alert("CLICK MÁS COLORES");
  };
  return (
    <>
      <Card
        srcImg="/imgs/polo-manga-larga-combinado-para-nino_id_12-04182-075-M-4.jpg"
        altImg=""
        description="Esta es la descripcion"
        onClick={(e) => handleClickAdd()}
        Content={
          <div className={styles.cardContent}>
            <Gap />
            <Pricing price={10} discount={20} currency={"€"} />
            <Gap />
            <AdditionalContent onClick={(e) => handleClickMoreColors()} />
            <Gap size="15px" />
          </div>
        }
      />
    </>
  );
}
