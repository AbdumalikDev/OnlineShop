import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='top-nav'>
        <div className='row'>
          <ul>
            <li>
              <Link to='/' className='nav-link'>
                Muddatli to'lov
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link'>
                Yetkazib berish
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link'>
                To'lov
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link'>
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link'>
                <i className='far fa-heart'></i> &nbsp; Yoqtirilgan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav>
        <div className='row'>
          <div className='nav-left'>
            <div className='check-box'>
              <input type='checkbox' id='nav-check' />
              <div className='nav-btn'>
                <label for='nav-check'>
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to='/' className='nav-link'>
                      Muddatli to'lov
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      Yetkazib berish
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      To'lov
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      Muddatli to'lov
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      Yetkazib berish
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      To'lov
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      Muddatli to'lov
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      Yetkazib berish
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='nav-link'>
                      To'lov
                    </Link>
                  </li>
                </ul>
                <label for='nav-check'>
                  <i className='fa fa-times'></i>
                </label>
              </div>
            </div>

            <div className='brand-name'>
              <Link to='/'>OnlineStore</Link>
            </div>
          </div>
          <div className='search-form'>
            <form method='get'>
              <input
                type='search'
                name='search'
                placeholder='Mahsulotni tez va oson toping...'
                required
              />

              <button type='submit'>
                <i className='fa fa-search'></i>
              </button>
            </form>
          </div>

          <div className='nav-right'>
            <ul>
              <li>
                <Link to='/' className='nav-link'>
                  <span> Savatcha </span>
                  <i className='fa fa-shopping-cart'></i>
                  <sup>2</sup>
                </Link>
              </li>
              <li>
                <Link to='/login' className='nav-link'>
                  <span> | &nbsp;&nbsp;&nbsp;&nbsp; Hisobim </span>

                  <i className='far fa-user'></i>
                </Link>
                <div className='dropdown-container'>
                  <div className='dropdown-content'>
                    <Link to='/login' className='btn btn-white'>
                      Kirish
                    </Link>
                    <Link to='/login' className='btn btn-black'>
                      Ro'yxatdan o'tish
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
