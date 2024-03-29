import { useState, useEffect } from "react";

import Wrapper from "../../assets/wrapper/midprep_34/Products_scss_34";

import { useDemoContext_34 } from '../../context/DemoContext_34'

const MiddleProjectNodeServerContextPage_34 = () => {
  const { pName, pId, data1, data2 } = useDemoContext_34();
  console.log(data1);
  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>Fetch Blogs From Supabase Server Context</h2>
          <h3>
            {pName} {pId}
          </h3>
        </div>
        <div className="shop-page">
          <div className="collection-overview">
            <div className="collection-preview">
              <h1 className="title">Coffee one</h1>
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
            <div className="collection-preview">
              <h2 className="title">Coffee two</h2>
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
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default MiddleProjectNodeServerContextPage_34;
