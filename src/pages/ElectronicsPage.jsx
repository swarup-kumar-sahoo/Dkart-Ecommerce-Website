import React from "react";
import "./ElectronicsPage.css";

const ElectronicsPage = () => {
  const electronicsItems = [
    {
      id: 1,
      title: "Smartphones",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
    },
    {
      id: 2,
      title: "Laptops",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70",
    },
    {
      id: 3,
      title: "Headphones",
      image: "https://rukminim2.flixcart.com/image/612/612/kmccosw0/headphone/z/j/l/rockerz-450-pro-boat-original-imagf9gz5qkud2z9.jpeg?q=70",
    },
    {
      id: 4,
      title: "Smart Watches",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/v/r/-original-imah76jcgq3y3srt.jpeg?q=70",
    },
    {
      id: 5,
      title: "Cameras",
      image: "https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70",
    },
    {
      id: 6,
      title: "Televisions",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/v/0/c/l32ma-ain-mi-original-imah493pw3fsfrgz.jpeg?q=70",
    },
    {
      id: 7,
      title: "Speakers",
      image: "https://rukminim2.flixcart.com/image/612/612/kuyf8nk0/speaker/laptop-desktop-speaker/m/2/d/dj-wireless-rechargeable-brand-new-top-selling-portable-stereo-original-imag7yk4ggkhhpn6.jpeg?q=70",
    },
    {
      id: 8,
      title: "Gaming Consoles",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/gamingconsole/n/o/o/-original-imagzf6vfz5hjpab.jpeg?q=70",
    },
  ];

  return (
    <div className="electronics-page">
      <h1>Electronics</h1>
      <div className="electronics-grid">
        {electronicsItems.map((item) => (
          <div className="electronics-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="electronics-details">
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

export default ElectronicsPage;
