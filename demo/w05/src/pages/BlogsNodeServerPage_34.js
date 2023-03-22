import { useState, useEffect } from "react";
import axios from "axios";
// import blogsData from "../data/blogData2_34";

// let api_url = `http://localhost:5100/api/card2_34`;
let api_url = `https://one112-server-card-demo-34.onrender.com/api/card2_34`;

const BlogsNodeServerPage_34 = () => {
  const [name, setName] = useState("A-ion");
  const [id, setId] = useState("210410134");

  const [data, setData] = useState([]);
  // console.log("blog data", data);

  const fetchBlogDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log("results", results);
      setData(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromNodeServer();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Fetch Blogs From Node Server -- {name} {id}
          </h2>
        </div>``
        <div className="blogs-center2">
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className="blog">
                <img src={remote_img} alt={title} className="img blog-img" />
                <div className="blog-content">
                  <span>
                    {category} <i className="fa-solid fa-mug-saucer"></i>
                  </span>
                  <h3>{desc}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="#">read more</a>
                </div>
              </article>
            );
          })}

          {/* <article className="blog">
            <img
              src="./images/photo-1.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-2.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <i className="fa-solid fa-globe"></i>
              </span>
              <h3>travel to paris</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-3.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>coffee brings friendship</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-4.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>coffee make you feel good</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-5.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>coffee make you calm</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-6.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <i className="fa-solid fa-globe"></i>
              </span>
              <h3>101 tower in Taipei</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-7.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>sun rise from the mountain</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-8.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>serene lake with trees</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="./images/photo-9.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <h3>rocks of queen head in Yehliu Taiwan</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article> */}
        </div>
      </section>
    </>
  );
};

export default BlogsNodeServerPage_34;
