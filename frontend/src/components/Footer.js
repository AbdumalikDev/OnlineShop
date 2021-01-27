import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className='brand-name'>
          <Link to='/'>OnlineStore</Link>
        </div>
        <div className='footer-icons'>
          <Link to='/'>
            <i className='fab fa-telegram'></i>
          </Link>
          <Link to='/'>
            <i className='fab fa-facebook'></i>
          </Link>
          <Link to='/'>
            <i className='fab fa-instagram'></i>
          </Link>
          <Link to='/'>
            <i className='fab fa-youtube'></i>
          </Link>
        </div>

        <p>OnlineStore &copy; 2021</p>
      </div>

      <div className='footer-links'>
        <p>Sayt Xaritasi</p>
        <ul>
          <li>
            <Link to='/'>Bosh Sahifa</Link>
          </li>
          <li>
            <Link to='/'>Yangiliklar</Link>
          </li>
          <li>
            <Link to='/'>Arzon Narxlarda</Link>
          </li>
          <li>
            <Link to='/'>Biz haqimizda</Link>
          </li>
          <li>
            <Link to='/'>Biz bilan bog'lanish</Link>
          </li>
        </ul>
      </div>

      <div className='footer-right'>
        <p>Sayt Haqida</p>
        <span className='footer-company-about'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          perferendis numquam nostrum natus nulla, perspiciatis minima quidem
          eos soluta aliquam, ducimus?
        </span>
      </div>
    </footer>
  );
};

export default Footer;
