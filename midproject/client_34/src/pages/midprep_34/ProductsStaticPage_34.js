import { useState } from "react";

import Wrapper from "../../assets/wrapper/midprep_34/Products_scss_34";

// import Wrapper from '../../assets/wrapper/midprep_xx/Products_css_xx';

const ProductsStaticPage_34 = () => {
  const [name, setName] = useState("A-ion");
  const [id, setId] = useState("210410634");

  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>Fetch Blogs From Local Json Data</h2>
          <h3>
            {name} {id}
          </h3>
        </div>
        <div className="shop-page">
          <div className="collection-overview">
            <div className="collection-preview">
              <h2 className="title">Hats</h2>
              <div className="preview">
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/hats/brown-brim.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Brown Brim</span>
                    <span className="price">25</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/hats/blue-beanie.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Blue Beanie</span>
                    <span className="price">18</span>
                  </div>
                  <button className="custom-button">Add to Card</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/hats/brown-cowboy.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Brown Cowboy</span>
                    <span className="price">35</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/hats/grey-brim.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Grey Brim</span>
                    <span className="price">25</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="collection-preview">
              <h1 className="title">Jackets</h1>
              <div className="preview">
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/jackets/black-shearling.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Black Jean Shearling</span>
                    <span className="price">125</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/jackets/blue-jean-jacket.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Blue Jean Jacket</span>
                    <span className="price">90</span>
                  </div>
                  <button className="custom-button">Add to Card</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/jackets/grey-jean-jacket.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Grey Jean Jacket</span>
                    <span className="price">90</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
                <div className="collection-item">
                  <img
                    className="image"
                    src="/crown/img/jackets/brown-shearling.png"
                  />
                  <div className="collection-footer">
                    <span className="name">Brown Shearling</span>
                    <span className="price">165</span>
                  </div>
                  <button className="custom-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ProductsStaticPage_34;
