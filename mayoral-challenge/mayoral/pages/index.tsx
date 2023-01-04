import Card from "../components/Card";
import Pricing from "../components/Pricing";
import AdditionalContent from "../components/AdditionalCotent";
import styles from "../styles/Home.module.css";
import Gap from "../components/Gap";
import React, { useState } from "react";
import path from "path";
import fs from "fs";
import ActionBar from "../components/ActionBar";

//TYPES
export type ItemType = {
  id: number;
  src: string;
  description: string;
  price: number;
  discount: number;
};

export type SortTypes = "asc" | "desc" | "";

export type HomeProps = {
  items: {
    data: ItemType[];
  };
};

//Auxiliar functions
export const filterItemsByText = (items: ItemType[], text: string) => {
  if (!text) return items;
  let filteredItems = items.filter((item) => {
    if (item.description.includes(text)) {
      return true;
    }
    return false;
  });
  return filteredItems;
};

export const sortItemsByPrice = (items: ItemType[], type: SortTypes) => {
  if (!type) return items;
  let sortedItems = items.sort((a, b) => {
    let disconuntA = a.discount ? a.discount : 0;
    let disconuntB = b.discount ? +b.discount : 0;
    let operation = type === "desc" ? -1 : 1;
    return (
      operation *
      (+a.price * (1 - disconuntA / 100) - b.price * (1 - disconuntB / 100))
    );
  });
  console.log("sortedItems", sortedItems);
  return sortedItems;
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
  const [valueSortPrice, setValueSortPrice] = useState<string>("");
  const [elemntsPerCol, setElementsPerCol] = useState<string>("plus");

  const changeView = (type: string) => {
    setElementsPerCol(type);
  };

  const handleOnchangeSearchText = (type: "search" | "sort", text: string) => {
    let searchValue = searchText;
    let sortValue = valueSortPrice;
    if (type === "search") {
      setSearchText(text);
      searchValue = text;
    } else if (type === "sort") {
      setValueSortPrice(text);
      sortValue = text;
    }

    let filteredItems = filterItemsByText(items.data, searchValue);
    let sortedItems = sortItemsByPrice(filteredItems, sortValue as SortTypes);
    setItemsToShow(sortedItems);
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
        onClick={(data) => changeView(data.type)}
        searchValue={searchText}
        onChange={(text) => handleOnchangeSearchText("search", text)}
        onChangeSortPrice={(value) => handleOnchangeSearchText("sort", value)}
        valueSortPrice={valueSortPrice}
      />
      <div
        className={
          elemntsPerCol === "plus" ? styles.cardListPlus : styles.cardListMinus
        }
      >
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
                  <div>
                    <Gap />
                    <Pricing
                      price={polo.price}
                      discount={polo.discount}
                      currency={"€"}
                    />
                    <Gap />
                    <AdditionalContent
                      onClick={(e) => handleClickMoreColors()}
                    />
                    <Gap size="15px" />
                  </div>
                }
              />
            );
          })}
      </div>
    </>
  );
}
