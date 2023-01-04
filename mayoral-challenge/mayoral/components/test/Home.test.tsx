import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { filterItemsByText, sortItemsByPrice } from "../../pages/index";

describe("Test Home page", () => {
  it("Test filter function", () => {
    let items = [
      {
        id: 1,
        src: "imgSrc",
        description: "Polo manga larga",
        price: 20,
        discount: 10,
      },
      {
        id: 2,
        src: "imgSrc",
        description: "Polo manga corta",
        price: 20,
        discount: 10,
      },
    ];

    let filteredData = filterItemsByText(items, "cort");
    expect(filteredData.length).toBe(1);
    expect(filteredData[0].description).toBe("Polo manga corta");
  });

  it("Test sort function", () => {
    let items = [
      {
        id: 1,
        src: "imgSrc",
        description: "Polo manga larga",
        price: 20,
        discount: 0,
      },
      {
        id: 2,
        src: "imgSrc",
        description: "Polo manga corta",
        price: 20,
        discount: 10,
      },
      {
        id: 3,
        src: "imgSrc",
        description: "Polo manga corta",
        price: 30,
        discount: 50,
      },
    ];

    let sortedData = sortItemsByPrice(items, "asc");
    expect(sortedData.length).toBe(3);
    let idsSortedData = sortedData.map((item) => item.id);
    expect(idsSortedData).toEqual([3, 2, 1]);
    sortedData = sortItemsByPrice(items, "desc");
    idsSortedData = sortedData.map((item) => item.id);
    expect(idsSortedData).toEqual([1, 2, 3]);
  });
});
