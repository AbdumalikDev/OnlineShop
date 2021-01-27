import React from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = () => {
  return (
    <section className='landing landing-login'>
      <div className='row'>
        <div className='container-login'>
          <div className='tab'>
            <button>Hisob yaratish</button>
            <button>Kirish</button>
          </div>

          {/* <div id="login" className="tab-content">
            <h1>Xush kelibsiz!</h1>
            <form action="/login.html" method="post">
              <label for="email">*Email</label>
              <input
                id="email"
                type="email"
                placeholder="Elektron pochtangizni kiriting"
                required
              />
              <label for="password">*Parol</label>
              <input
                id="password"
                type="password"
                placeholder="Parolni kiriting"
                required
              />
              <input type="checkbox" name="" id="check" />
              <label for="check">Eslab qol</label>
              <button type="submit" className="btn-real btn-real-black">
                Kirish
              </button>
            </form>
            <div>
              <h3>Tez kirish</h3>
              <Link to="/" className="btn btn-facebook">
                <i className="fab fa-facebook"></i> facebook
              </Link>
              <Link to="/" className="btn btn-google">
                <i className="fab fa-google"></i> Google
              </Link>
            </div>
          </div> */}

          <div id='register' className='tab-content'>
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
              <label for='fName'>*Ism</label>
              <input
                id='fName'
                type='text'
                placeholder='Ismingizni kiriting'
                required
              />
              <label for='lName'>Familiya</label>
              <input
                id='lName'
                type='text'
                placeholder='Familiyangizni kiriting'
              />
              <label for='email'>*Email</label>
              <input
                id='email'
                type='email'
                placeholder='Elektron pochtangizni kiriting'
                required
              />
              <label for='password'>*Parol</label>
              <input
                id='password'
                type='password'
                placeholder='Parolingizni kiriting'
                required
              />
              <input type='checkbox' name='' id='check' />
              <label for='check'>Eslab qol</label>
              <button type='submit' className='btn-real btn-real-black'>
                Hisob yaratish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
