import React from "react";
import "./MensFashionPage.css";

const MensFashionPage = () => {
  const mensItems = [
    {
      id: 1,
      title: "Men's T-Shirt",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/v/e/l-ts36-vebnor-original-imah4zb9rswzzbvc.jpeg?q=70",
    },
    {
      id: 2,
      title: "Men's Jacket",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jacket/a/s/i/xxl-535-2-ftx-men-original-imah5r8e8rnyy2jm.jpeg?q=70",
    },
    {
      id: 3,
      title: "Men's Jeans",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/q/p/j/-original-imagyj7hfmhmpwv9.jpeg?q=70",
    },
    {
      id: 4,
      title: "Men's Shoes",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/1/h/6-snk-eva-854-gry-6-bruton-grey-original-imah4ug8x8qbm3wk.jpeg?q=70",
    },
    {
      id: 5,
      title: "Men's Watch",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/n/k/e/-original-imagtdubyaxhcyvj.jpeg?q=70",
    },
    {
      id: 6,
      title: "Men's Sweater's",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/r/b/1/xl-hgvtysfcjn-zakod-original-imaguehmpnh8jcqu.jpeg?q=70",
    },

    {
        id: 7,
        title: "Men's Suits",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/coat/u/9/d/3xl-mencoat01grey-yha-original-imah5hrhezg3zjsc.jpeg?q=70",
      },
      {
        id: 8,
        title: "Men's Grooming Kit",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/deodorant/r/s/1/-original-imah4veqs2wegrhr.jpeg?q=70",
      },
  ];

  return (
    <div className="mens-fashion-page">
      <h1>Men's Fashion</h1>
      <div className="mens-grid">
        {mensItems.map((item) => (
          <div className="mens-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="mens-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensFashionPage;
