import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Card
        srcImg="/imgs/polo-manga-larga-combinado-para-nino_id_12-04182-075-M-4.jpg"
        altImg=""
        description="Esta es la descripcion"
        Content={<h1>Content</h1>}
      />
    </>
  );
}
