import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabButton from '../components/TabButton';
import './LoginScreen.css';

const LoginScreen = () => {
  const [tab, setTab] = useState('Hisob yaratish');

  const changeTab = (text) => {
    setTab(text);
  };

  return (
    <section className='landing landing-login'>
      <div className='row'>
        <div className='container-login'>
          <div className='login-tab'>
            <TabButton
              key='1'
              tabStyle={tab === 'Hisob yaratish' && '3px'}
              text='Hisob yaratish'
              clickTab={changeTab}
            />
            <TabButton
              key='2'
              tabStyle={tab === 'Kirish' && '3px'}
              text='Kirish'
              clickTab={changeTab}
            />
          </div>

          <div
            id='register'
            className='login-tab-content'
            style={{ display: tab === 'Kirish' && 'none' }}
          >
            <div>
              <h3>Tez ro'yxatdan o'tish</h3>
              <Link to='/' className='btn btn-facebook'>
                <i className='fab fa-facebook'></i> facebook
              </Link>
              <Link to='/' className='btn btn-google'>
                <i className='fab fa-google'></i> Google
              </Link>
              <h3>yoki</h3>
            </div>

            <form method='post'>
              <label for='fullName'>To'liq Ism</label>
              <input
                id='fullName'
                type='text'
                placeholder="To'liq Ismingizni kiriting"
                required
              />
              <label for='email1'>Email</label>
              <input
                id='email1'
                type='email'
                placeholder='Elektron pochtangizni kiriting'
                required
              />
              <label for='password1'>Parol</label>
              <input
                id='password1'
                type='password'
                placeholder='Parolingizni kiriting'
                required
              />
              <input id='check1' type='checkbox' />
              <label for='check1'>Eslab qol</label>
              <button type='submit' className='btn-real btn-real-black'>
                Hisob yaratish
              </button>
            </form>
          </div>

          <div
            id='login'
            className='login-tab-content'
            style={{ display: tab === 'Hisob yaratish' && 'none' }}
          >
            <h1>Xush kelibsiz!</h1>
            <form method='post'>
              <label for='email2'>Email</label>
              <input
                id='email2'
                type='email'
                placeholder='Elektron pochtangizni kiriting'
                required
              />
              <label for='password2'>Parol</label>
              <input
                id='password2'
                type='password'
                placeholder='Parolni kiriting'
                required
              />
              <input id='check2' type='checkbox' />
              <label for='check2'>Eslab qol</label>
              <button type='submit' className='btn-real btn-real-black'>
                Kirish
              </button>
            </form>
            <div>
              <h3>Tez kirish</h3>
              <Link to='/' className='btn btn-facebook'>
                <i className='fab fa-facebook'></i> facebook
              </Link>
              <Link to='/' className='btn btn-google'>
                <i className='fab fa-google'></i> Google
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
