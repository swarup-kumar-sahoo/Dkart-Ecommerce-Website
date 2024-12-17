import React from "react";
import "./KidsFashionPage.css";

const KidsFashionPage = () => {
  const kidsItems = [
    {
      id: 1,
      title: "Kids' T-Shirts",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/p/p/y/6-12-months-24p3089c5786i101-united-colors-of-benetton-original-imagxpbbpbygjnjd.jpeg?q=70",
    },
    {
      id: 2,
      title: "Kids' Jeans",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/k/f/5-6-years-klraw21jn008d-killer-original-imagbcrgyr4nhqtf-bb.jpeg?q=70",
    },
    {
      id: 3,
      title: "Kids' Shoes",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/c/a/3/3-brd-1300-birde-original-imah6rx28gyfjyn5.jpeg?q=70",
    },
    {
      id: 4,
      title: "Kids' Jackets",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/g/5/m/9-10-years-no-klr-0055bb-olive-killer-original-imah695fhzfghdhv.jpeg?q=70",
    },
    {
      id: 5,
      title: "Kids' Toys",
      image: "https://rukminim2.flixcart.com/image/612/612/kk1h5e80/role-play-toy/5/p/g/3-in-1-portable-little-chef-kitchen-set-with-comfortably-pack-in-original-imafzh57sgjqvhq5.jpeg?q=70",
    },
    {
      id: 6,
      title: "Kids' Backpacks",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-backpack/7/t/g/large-light-weight-trendy-school-college-office-bag-casual-original-imah6sz272akhrjz.jpeg?q=70",
    },
    {
      id: 7,
      title: "Kids' Glasses",
      image: "https://rukminim2.flixcart.com/image/612/612/khglj0w0/frame/a/c/i/44-bprm04-optify-original-imafxg96zme6wpdq.jpeg?q=70",
    },
    {
      id: 8,
      title: "Kids' Pajamas",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/pyjama/h/f/c/14-15-years-757819-v-mart-original-imagyvsz8rjgx7nq.jpeg?q=70",
    },
  ];

  return (
    <div className="kids-fashion-page">
      <h1>Kids Fashion</h1>
      <div className="kids-grid">
        {kidsItems.map((item) => (
          <div className="kids-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="kids-details">
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

export default KidsFashionPage;
