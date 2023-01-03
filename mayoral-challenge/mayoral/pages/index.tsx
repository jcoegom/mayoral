import Card from "../components/Card";
import Pricing from "../components/Pricing";
import AdditionalContent from "../components/AdditionalCotent";
import styles from "../styles/Home.module.css";
import Gap from "../components/Gap";
import React, { useState } from "react";
import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";
import ActionBar from "../components/ActionBar";
import { isReadable } from "stream";

//TYPES
type ItemType = {
  id: number;
  src: string;
  description: string;
  price: number;
  discount: number;
};

type HomeProps = {
  items: {
    data: ItemType[];
  };
};

//Auxiliar functions
const filterItemsByText = (items: ItemType[], text: string) => {
  let filteredItems = items.filter((item) => {
    if (item.description.includes(text)) {
      return true;
    }
    return false;
  });
  return filteredItems;
};

//getStaticProps
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

//HOME PAGE
export default function Home({ items }: HomeProps) {
  const [itemsToShow, setItemsToShow] = useState(items?.data ? items.data : []);
  const [searchText, setSearchText] = useState<string>("");

  const handleOnchangeSearchText = (text: string) => {
    setSearchText(text);
    let filteredItems = filterItemsByText(items.data, text);
    setItemsToShow(filteredItems);
  };

  const handleClickAdd = (id: number) => {
    alert("CLICK AÑADIR ID " + id);
  };
  const handleClickMoreColors = () => {
    alert("CLICK MÁS COLORES");
  };
  return (
    <>
      <ActionBar
        onClick={(data) => alert(data.type)}
        searchValue={searchText}
        onChange={handleOnchangeSearchText}
      />
      {itemsToShow &&
        itemsToShow.map((polo) => {
          return (
            <Card
              key={polo.id}
              srcImg={polo.src}
              altImg={polo.description}
              description={polo.description}
              onClick={(e) => handleClickAdd(polo.id)}
              Content={
                <div className={styles.cardContent}>
                  <Gap />
                  <Pricing
                    price={polo.price}
                    discount={polo.discount}
                    currency={"€"}
                  />
                  <Gap />
                  <AdditionalContent onClick={(e) => handleClickMoreColors()} />
                  <Gap size="15px" />
                </div>
              }
            />
          );
        })}
    </>
  );
}
