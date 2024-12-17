import React, { useEffect, useRef} from "react";
import "./HomePage.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

const HomePage = () => {
  const products = [
    { id: 1, title: "Men's Wear", image: "https://www.jiomart.com/images/product/500x630/rvgf3ierrh/filose-jeans-mens-wear-pure-cotton-blue-color-shirt-product-images-rvgf3ierrh-0-202209291446.jpg" },
    { id: 2, title: "Women's Wear", image: "https://juniperfashion.com/cdn/shop/files/Untitled_design_5.jpg?v=1704555519&width=1080" },
    { id: 3, title: "Kids' Wear", image: "https://i.etsystatic.com/11463421/r/il/d65ffb/1869837863/il_fullxfull.1869837863_exek.jpg" },
    { id: 4, title: "Smart Watch", image: "https://www.watchoutwearables.com/cdn/shop/files/next-gen-kids-smartwatch-grey-kids-smartwatch-watchoutsmart-watchwatchoutwearablesblack-556932.jpg?v=1717229864" },
    { id: 5, title: "Headphones", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP-zNYlb12yoJ0e2BKwUScfrmddDRfLBo4A&s" },
    { id: 6, title: "Laptop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1J-Di51cfYpHj3VnquzRdjmGpbCr6YyIVg&s" },
  ];

  const trendingBrands = [
    { id: 1, name: "Raymond", logo: "https://vegacitymall.com/wp-content/uploads/2021/04/Raymond.png" },
    { id: 2, name: "Puma", logo: "https://static.vecteezy.com/system/resources/thumbnails/022/076/746/small_2x/puma-logo-and-art-free-vector.jpg" },
    { id: 3, name: "Samsung", logo: "https://static.vecteezy.com/system/resources/thumbnails/020/975/669/small_2x/samsung-logo-samsung-icon-transparent-free-png.png" },
    { id: 4, name: "Apple", logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" },
    { id: 5, name: "Sony", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIjJL-gFQQNIKYSOStzeRUs0ZFXMK50LnhA&s" },
    { id: 6, name: "Hp", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IafMVxNIQKk9tk_Ek4iMDOmjjP0GJPChxw&s" },
    { id: 7, name: "Realme", logo: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-2161,resizemode-75,msid-107239424/industry/cons-products/electronics/our-goal-is-10-pc-increase-in-sales-within-india-in-2024-realme-founder.jpg" },
    { id: 8, name: "Oppo", logo: "https://cdn.iconscout.com/icon/free/png-256/free-oppo-logo-icon-download-in-svg-png-gif-file-formats--mobile-smartphone-technology-brand-company-major-brands-logos-pack-icons-8715832.png" },

  ];

  const gridCards = [
    { id: 1, title: "Shirt, Jeans & T-shirt", image: "https://levi.in/cdn/shop/files/0003B0000_03_Front.jpg?v=1721824975&width=1445" },
    { id: 2, title: " Dinner & Sets", image: "https://www.hitkari.co.in/cdn/shop/files/DSC8964_800x.jpg?v=1709279415" },
    { id: 3, title: "Tablet", image: "https://p4-ofp.static.pub//fes/cms/2024/10/18/2po07ph2esb78vixcua4grcbyr4spc286471.jpg" },
    { id: 4, title: "Bags", image: "https://images.jdmagicbox.com/quickquotes/images_main/fastrack-black-compact-backpack-a0730nbk01-black-164544956-qru3r.jpg" },
    { id: 5, title: "Mobile", image: "https://www.bigcmobiles.com/media/catalog/product/cache/6f935541fc7266f00577560114fa3a98/s/t/starlight_1.jpg" },
    { id: 6, title: "Footwear", image: "https://i5.walmartimages.com/seo/GYUJNB-Fashion-Spring-And-Summer-Women-Sports-Shoes-Flat-Soft-Mesh-Breathable-Solid-Color-Slip-On-Simple-Style_e713306c-3661-4bee-95af-a893d96bb622.bbc00ccadac87a14a63f6f3c30b0067d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { id: 7, title: "Hand Bags", image: "https://giri.in/cdn/shop/files/6068249_Sling_Bag_10.5x8_Inch_5_700x700.webp?v=1723178856" },
    { id: 8, title: "Suitcase", image: "https://media.istockphoto.com/id/1368938419/vector/realistic-detailed-3d-yellow-travel-suitcase-vector.jpg?s=612x612&w=0&k=20&c=CcpN0kqGKXjkBXrtfAlEt2ESiVSEoZzHhacgYfXaO-g=" },
    { id: 9, title: "Smartwatch", image: "https://ae.hama.com/bilder/00178/abx/00178611abx8.webp" },
    { id: 10, title: "Speaker", image: "https://images-cdn.ubuy.co.in/66c394ff56f5ed29c92a7925-jbl-charge-5-portable-waterproof.jpg" },
    { id: 11, title: "Kitchen Appliances", image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/kY55c43XR-BPL-Juicer-Mixer-Grinder-BJMG30150.jpeg" },
    { id: 12, title: "Cooker", image: "https://mccoyindia.in/wp-content/uploads/2020/05/glare1.jpg" },
    
  ];

  const testimonials = [
    {
      id: 1,
      class: "testimonial-1",
    },
    {
      id: 2,
      class: "testimonial-2",
    },
    {
      id: 3,
      class: "testimonial-3",
    },
    {
      id: 4,
      class: "testimonial-4",
    },
  ];

  const cardContainerRef = useRef(null);
  const bannerContainerRef = useRef(null);
  const trendingBrandsRef = useRef(null);
  const testimonialContainerRef = useRef(null);

  // Card Auto-Scroll Logic
  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    let scrollPosition = 0;
    const cardWidth = 200;
    const scrollSpeed = 2000;

    const scrollCards = () => {
      if (cardContainer) {
        scrollPosition += cardWidth;
        if (scrollPosition >= cardContainer.scrollWidth) {
          scrollPosition = 0;
        }
        cardContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const cardInterval = setInterval(scrollCards, scrollSpeed);
    return () => clearInterval(cardInterval);
  }, []);

  // Banner Auto-Scroll Logic
  useEffect(() => {
    const bannerContainer = bannerContainerRef.current;
    let scrollPosition = 0;
    const bannerWidth = bannerContainer.clientWidth;
    const scrollSpeed = 3000;

    const scrollBanners = () => {
      if (bannerContainer) {
        scrollPosition += bannerWidth;
        if (scrollPosition >= bannerContainer.scrollWidth) {
          scrollPosition = 0;
        }
        bannerContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const bannerInterval = setInterval(scrollBanners, scrollSpeed);
    return () => clearInterval(bannerInterval);
  }, []);

  // Trending Brands Auto-Scroll Logic
  useEffect(() => {
    const trendingContainer = trendingBrandsRef.current;
    let scrollPosition = 0;
    const brandWidth = 150; // Width of the brand logo card
    const scrollSpeed = 2000;

    const scrollTrendingBrands = () => {
      if (trendingContainer) {
        scrollPosition += brandWidth;
        if (scrollPosition >= trendingContainer.scrollWidth) {
          scrollPosition = 0;
        }
        trendingContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const trendingInterval = setInterval(scrollTrendingBrands, scrollSpeed);
    return () => clearInterval(trendingInterval);
  }, []);

  // Testimonial Auto-Scroll Logic
  useEffect(() => {
    const testimonialContainer = testimonialContainerRef.current;
    let scrollPosition = 0;
    const testimonialWidth = 400; // Width of the testimonial card
    const scrollSpeed = 3000;

    const scrollTestimonials = () => {
      if (testimonialContainer) {
        scrollPosition += testimonialWidth;
        if (scrollPosition >= testimonialContainer.scrollWidth) {
          scrollPosition = 0;
        }
        testimonialContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const testimonialInterval = setInterval(scrollTestimonials, scrollSpeed);
    return () => clearInterval(testimonialInterval);
  }, []);

  
  return (
    <div className="homepage">
      

      {/* Banner Section */}
      <div
        className="banner-section"
        ref={bannerContainerRef}
      >
        <div
          className="banner"
          style={{ backgroundImage: `url(${banner1})` }}
        ></div>
        <div
          className="banner"
          style={{ backgroundImage: `url(${banner2})` }}
        ></div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for products..."
        />
      </div>

      {/* Auto-Scrolling Product Cards */}
      <div className="horizontal-cards">
        <h2>Top Products</h2>
        <div className="card-container" ref={cardContainerRef}>
          {products.map((product) => (
            <div key={product.id} className="card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Scrolling Trending Brands */}
      <div className="horizontal-brands">
        <h2>Trending Brands</h2>
        <div className="brand-container" ref={trendingBrandsRef}>
          {trendingBrands.map((brand) => (
            <div key={brand.id} className="brand">
              <div
                className="brand-logo"
                style={{ backgroundImage: `url(${brand.logo})` }}
              ></div>
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Scrolling Testimonials */}
      <div className="horizontal-testimonials">
        <h2>Best Brand Offers</h2>
        <div className="testimonial-container" ref={testimonialContainerRef}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial ${testimonial.class}`}
            >
              <p>{testimonial.text}</p>
              <h4>{testimonial.author}</h4>
              <div className="author-info">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>

       {/* Grid Card Section */}
       <div className="grid-card-section">
        <h2>Explore Our Categories</h2>
        <div className="grid-card-container">
          {gridCards.map((card) => (
            <div
              key={card.id}
              className="grid-card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
<section className="contact-section">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you. Feel free to get in touch!</p>
  <form className="contact-form">
    <div className="form-group">
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>
    <div className="form-group">
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        rows="4"
        placeholder="Write your message here..."
        required
      ></textarea>
    </div>
    <button type="submit" className="submit-btn">Send Message</button>
  </form>
</section>


    </div>
  );
};

export default HomePage;
