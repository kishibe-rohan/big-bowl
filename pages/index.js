import { useState } from "react";
import Image from "next/image";

import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import AddButton from "../components/AddButton";

import axios from "axios";

/*
const menuList = [
  {
    id: "1",
    img: "/images/japchae.png",
    price: 10,
    title: "Japchae",
    desc: "Best japchae in town",
  },
  {
    id: "2",
    img: "/images/manchurian.png",
    price: 10,
    title: "Manchurian",
    desc: "Best macnhurian in town",
  },
  {
    id: "3",
    img: "/images/schezwan.png",
    price: 10,
    title: "Schezwan",
    desc: "Best Schezwan in town",
  },
  {
    id: "4",
    img: "/images/singapore.png",
    price: 10,
    title: "Singapore",
    desc: "Best Singapore in town",
  },
  {
    id: "5",
    img: "/images/topokki.png",
    price: 10,
    title: "Topokki",
    desc: "Best Topokki in town",
  },
  {
    id: "6",
    img: "/images/wonton.png",
    price: 10,
    title: "Wonton",
    desc: "Best Wonton in town",
  },
  {
    id: "7",
    img: "/images/spaghetti.png",
    price: 10,
    title: "Spaghetti",
    desc: "Best Spaghetti in town",
  },
  {
    id: "8",
    img: "/images/yakisoba.png",
    price: 10,
    title: "Yakisoba",
    desc: "Best Yakisoba in town",
  },
];
*/

export default function Home({ foodList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div>
      <Slider />
      {<AddButton setClose={setClose} />}
      <ProductList productList={foodList} />
      {!close && <AddProduct setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  //console.log(res);
  return {
    props: {
      foodList: res.data,
      admin,
    },
  };
};
