import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';


import "./assets/style/bootstrap.css";//bootstrap
import "./assets/fontawsome/css/all.css"; //fontawesome
import "./assets/style/style.css"; //custome style
import questionPic from "./question.jpg";
import Answer from './answer';


class HomeWork2 extends React.Component{
  render(){
    return (
      <Router>
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                      <a className="nav-link active" href="/"><i className="fas fa-home"></i>&nbsp;خانه
                          <span className="visually-hidden">(فعلی)</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/about"><i className="fas fa-palette"></i>&nbsp;طراح</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/contact"><i className="fas fa-paper-plane"></i>&nbsp;تماس</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/answer"><i className="fas fa-paper-plane"></i>&nbsp;پاسخ سوال</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

  <div className="container">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/answer" element={<Answer />} />
    </Routes>
  </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className="row">
      <div className="col-lg-9 mx-auto">
          <div className="bs-component">
              <div className="card border-success mb-3">
                  <div className="card-header">تکلیف 2 طراحی وب</div>
                  <div className="card-body">
                      <h4 className="card-title">تمرین redux</h4>
                      <p className="card-text">
                      1.	تیم فوتبال: هدف این تمرین پیاده سازی یک شی REACT برای یک تیم فوتبال است. این شی لیستی از بازیکنان را نمایش می دهد. قابلیت اضافه کردن، ویرایش و حذف بازیکن لازم است. به شکل زیر توجه کنید: 
                      <br />
                      <img src={questionPic} alt="question" />
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
)

const Contact = () => (
  <div className="row">
      <div className="col-lg-9 mx-auto">
          <div className="bs-component">
              <div className="card border-secondary mb-3">
                  <div className="card-header">ارتباط با من</div>
                  <div className="card-body">
                      <h4 className="card-title">شماره تماس و ایمیل</h4>
                      <p className="card-text">
                          تلفن : 09121721621<br />
                          ایمیل : e.fakhimi1991@gmail.com
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
)
const About = () => (
  <div className="row">
      <div className="col-lg-9 mx-auto">
          <div className="bs-component">
              <div className="card border-light mb-3">
                  <div className="card-header">اسماعیل فخیمی شریف</div>
                  <div className="card-body">
                      <h4 className="card-title">دانشگاه ایلام</h4>
                      <p className="card-text">اسماعیل فخیمی شریف هستم ورودی ترم 971 دانشگاه ایلام در رشته مهندسی نرم افزار و پس از فارغ التحصلی از دانشگاه ایلام قصد ادامه تحصیل در مقطع ارشد و در گرایش رایانش امن را دارم.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
)
export default HomeWork2;
