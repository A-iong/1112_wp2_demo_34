import { useState, useEffect } from "react";

import axios from "axios";

import Wrapper from "../../assets/wrapper/midprep_34/Products_scss_34";

let api_url = `http://localhost:5100/api/midprep_34/overview2_34`;

const ProductsNodeServerPage_34 = () => {
  const [name, setName] = useState("ChungChun Wang");
  const [id, setId] = useState("210410196");

  const [data1, setData1] = useState([]);

  const [data2, setData2] = useState([]);

  const fetchBlogDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      setData1(results.data.data1);
      setData2(results.data.data2);
      console.log(results.data.data1);
      // setData1(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromNodeServer();
  }, []);

  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>Fetch Blogs From Node Server</h2>
          <h3>
            {name} {id}
          </h3>
        </div>
        <div className="shop-page">
          <div className="collection-overview">
            <div className="collection-preview">
              <h2 className="title">Hats</h2>
              <div className="preview">
                {data1.map((item) => {
                  const { pid, pname, price, cat_id, img_url } = item;
                  return (
                    <div className="collection-item" key={pid}>
                      <img className="image" src={img_url} />
                      <div className="collection-footer">
                        <span className="name">{pname}</span>
                        <span className="price">{price}</span>
                      </div>
                      <button className="custom-button">Add to Cart</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="collection-preview">
              <h1 className="title">Jackets</h1>
              <div className="preview">
                {data2.map((item) => {
                  const { pid, pname, price, cat_id, img_url } = item;
                  return (
                    <div className="collection-item" key={pid}>
                      <img className="image" src={img_url} />
                      <div className="collection-footer">
                        <span className="name">{pname}</span>
                        <span className="price">{price}</span>
                      </div>
                      <button className="custom-button">Add to Cart</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ProductsNodeServerPage_34;
