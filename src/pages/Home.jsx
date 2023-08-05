import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footernew from "../components/Footernew";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footernew />
    </div>
  );
};

export default Home;
