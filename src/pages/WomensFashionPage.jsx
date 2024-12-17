import React from "react";
import "./WomensFashionPage.css";

const WomensFashionPage = () => {
  const womensItems = [
    {
      id: 1,
      title: "Women's Dresses",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/u/p/l-round-neck-t-shirt-zilcon-original-imagsuyndp8tata3.jpeg?q=70",
    },
    {
      id: 2,
      title: "Women's Handbags",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/e/u/b/women-girl-shoulder-bag-40-women-shoulder-bag-hobo-hidle-berg-29-original-imah6ugy2zyufuye.jpeg?q=70",
    },
    {
      id: 3,
      title: "Women's Heels",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/m/1/t/5-aa-1097-5-gloglamp-black-original-imagrndc42hzzgqh.jpeg?q=70",
    },
    {
      id: 4,
      title: "Jewelry Sets",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/precious-earring/f/g/k/vs-si-3-48-ave770ya-stud-earring-avsar-original-imah7yxjehyg68jg.jpeg?q=70",
    },
    {
      id: 5,
      title: "Women's Sunglasses",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/9/q/m/medium-sun-2019-s1-srpm-original-imah4v7ysvwhrfnw.jpeg?q=70",
    },
    {
      id: 6,
      title: "Women's Perfume",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/s/i/v/80-luxury-unisex-perfume-gift-set-4x20-ml-eau-de-parfum-bella-original-imahyz6chfrcbfr4.jpeg?q=70",
    },
    {
      id: 7,
      title: "Women's Jackets",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/l/u/n/m-no-pltjkt001white-pretty-loving-thing-original-imagjptgsnfsdhga.jpeg?q=70",
    },
    {
      id: 8,
      title: "Women's Scarves",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/brush-applicator/n/a/s/-original-imah4ehqxrz2fzqv.jpeg?q=70",
    },
  ];

  return (
    <div className="womens-fashion-page">
      <h1>Women's Fashion</h1>
      <div className="womens-grid">
        {womensItems.map((item) => (
          <div className="womens-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="womens-details">
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

export default WomensFashionPage;
