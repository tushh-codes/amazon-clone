import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, image, desc }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small style={{ fontSize: "1.3rem" }}>₹</small>
          <strong
            style={{
              fontSize: "1.5rem",
              fontWeight: "800",
            }}
          >
            {price}
          </strong>
          <br></br>
          {desc}
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <img
                  className='stars'
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABLBJREFUaEPdmVlIVFEYgO+dGUfvqImNazqGFQahbRJWL9VbGEQkBiUtEBg9RC9BRdFGK/SUTwlFCxYULRSI9NLykImISxJkG7nkuEzmNlfHuTPNf+mX2+0u5+g9OjlvOnfO+b/5/v+c/5zhuTny4llzDD1etQ7mmLe9sZblXExBOk7kZSVnD1UCwEDnvHLPhbYuVjBMQfwPCnYJdnsVBC9KUplrx/t7/x0I2ohPyyiG4Ed7vdUsrTAzorSBFlha+Qfk+ply14Ezlf7ppIDaBo7F0oqpkamAqW1IiYs4brEjxH0J2gK/PjGpFVMQWjNaNqRlSRznTA/BWOG+r0+8z4cO661gU/niYFxqELOJtGoDJpJW5skgrKwQgZgFj9bgubL0Zw9xpVLanAT5Y+Vmzeo9WIt645POOyUjRqmmZ0M2gnUyBSskQERGSOpEb6XSszL24k2NlfuKZSBGNrRg7E1tNiv3FUtAjGpDbVNOMY+Ps38YlHf7qp6tpdPdtyyrEVIbWilKYsXyGoEBiydeJUNASYXxOY5gMNf/+cda91LPIZI60nvG97GjwrVkwbugw/FtsGG0HZ6rjtk4QGNKN7UwaAyYdzqXODL45eONnUKMy5EDkzkTUvKnA6D+bGCkvxX+N+EPtseuyhaD3nBLOBD4jIBGcDwEvHN5/Qr4diFYqburCAK1OkirgAEWQO2ZWXUIeb9lTTMPJ7jY4b7KaA3c7AsAsPHE1HLZSInz0eX4+fyhuNRss89F1ftjfZ3c6M9wxaNAybHJGhGfFp7ivN/P/g8wAbGDC41EQs9YePpOU+FVWBQmQcDMnpUNR6IdRgtCcx9BM7aEMOcUPFGXSnJAERPCtoZzyuA0T4hoJlpgJi38gcB0MgTBN2G35n92V802DBQ0vsLzM3VPl4a91mynmRJCK52IjMBDsADsXla7DczA3zO1ov2VSpF5wcTdD+ueGrUsRN0vpJldHDgeEsfyZwIGTdiEuFZJSL5EcrFHBIJmEIZV3ShNIISZCUwvIhD1AsAyzdCGUWFr7QlUIHCcTcvz10CKsbICIGCjt821mebSmxoEbtftfLCYVa0AiBR2UN8TU4OgEZYgzI1Ayx/T2/GWZY1gwU+kedbT/DhEZQRBWNUHFjGkF1MQbFtYpZUSxGwnV69cVEb6L7qvzcQBDAs+4aB3C2n7TQUyfjv7Pc3uruyVaNIR6oSThNbYvZ0FloPA7r4vt7qOs4v5ZucUda+kDIYECEFufSsuIr0SIjZCWuh/dawRAlhKAQRMKoHM6oy24IlBzApd3ScNd4kvxVH3FdydoSsQ4n1HE7OETQhlZAdAaNoUwws6pVajywmlBdiVQ+mZ5+GuSZ0WeIdm6+k+Cd0BGtKyI4+pcaTVqxkiI3pXRkoLRgDqybWA1HZg7OF2Tr7qIakTIhD87UPZY6EFALC5U6tI220lFB4PQr6+MjQEQHJNRa57aHouYhDssTAQBPA1j7+m6VK1UgO+KPeK2A1KIHiOpuciAlH2WDB4KCn9odZNBumar/cc3q3ZBntKcUEgbVWIQeB+GAD664dvTNeAGTAYSlmTuB+A4F6XpHkkAjGbOBrenzMgvwE0oix8D3rtbwAAAABJRU5ErkJggg=='
                  alt='rating'
                />
              </p>
            ))}
        </div>
      </div>
      <img className='product_image' src={image} alt='product_image' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
