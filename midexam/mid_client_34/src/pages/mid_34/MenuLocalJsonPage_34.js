import { useState } from 'react';

import Wrapper from '../../assets/wrapper/mid_34/Menu_34';
import menuData from '../../data/mid_34/menu_data';

const MenuLocalJsonPage_34 = () => {
  const [name, setName] = useState('A-ion');
  const [id, setId] = useState('210410634');

  const [data, setData] = useState(menuData);

  return (
    <Wrapper>
      <section className='menu'>
        <div className='title'>
          <h2>our menu - Local Json</h2>
          <h4>
            {name} {id}
          </h4>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button type='button' className='filter-btn' data-id='all'>
            all
          </button>
          <button type='button' className='filter-btn' data-id='breakfast'>
            breakfast
          </button>
          <button type='button' className='filter-btn' data-id='lunch'>
            lunch
          </button>
          <button type='button' className='filter-btn' data-id='dessert'>
            dessert
          </button>
          <button type='button' className='filter-btn' data-id='shakes'>
            shakes
          </button>
        </div>
        <div className='section-center'>
          {data.map((item) => {
            const { id, title, category, price, img, descrip } = item;
            return (
              <article key={id} className='menu-item'>
                <img src={img} alt={category} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{title}</h4>
                    <h4 className='price'>{price}</h4>
                  </header>
                  <p className='item-text'>{descrip}</p>
                </div>
              </article>
            );
          })}
          {/* <article className='menu-item'>
            <img src='/menu/images/my-1.jpg' alt='eggs' className='photo' />
            <div className='item-info'>
              <header>
                <h4>eggs</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img src='/menu/images/my-2.jpg' alt='big' salad='' className='photo' />
            <div className='item-info'>
              <header>
                <h4>big salad</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article> */}

          {/* <article className='menu-item'>
            <img
              src='/menu/images/my-3.jpg'
              alt='fried'
              dish=''
              className='photo'
            />
            <div className='item-info'>
              <header>
                <h4>fried dish</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img
              src='/menu/images/item-1.jpeg'
              alt='buttermilk'
              pancakes=''
              className='photo'
            />
            <div className='item-info'>
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className='price'>15.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img
              src='/menu/images/item-2.jpeg'
              alt='dinner'
              double=''
              className='photo'
            />
            <div className='item-info'>
              <header>
                <h4>dinner double</h4>
                <h4 className='price'>13.99</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img
              src='/menu/images/item-3.jpeg'
              alt='godzilla'
              milkshake=''
              className='photo'
            />
            <div className='item-info'>
              <header>
                <h4>godzilla milkshake</h4>
                <h4 className='price'>13.99</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article> */}
        </div>
      </section>
    </Wrapper>
  );
};

export default MenuLocalJsonPage_34;
