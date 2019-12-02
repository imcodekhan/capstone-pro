import React, { Component } from "react";
import { Route, Link, NavLink, HashRouter } from "react-router-dom";

import logo from "./assests/logo5.PNG";
import "./home.css";
import img1 from "./assests/img1.jpg";
import img2 from "./assests/img2.jpg";
import img3 from "./assests/img3.jpg";
import img4 from "./assests/img4.jpg";
import img5 from "./assests/img5.jpg";
import img6 from "./assests/img6.jpeg";
import img7 from "./assests/img7.jpg";
import img8 from "./assests/img8.jpg";
import img11 from "./assests/img11.png";
import img12 from "./assests/img12.PNG";
import img13 from "./assests/img13.png";
import img40 from "./assests/img40.jpg";
import img41 from "./assests/img41.jpg";
import img42 from "./assests/img42.jpg";
import img43 from "./assests/img43.jpg";
import img25 from "./assests/img25.jpg";
import img26 from "./assests/img26.jpg";
import img27 from "./assests/img27.jpg";

class Main extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    valid_email: false,
    valid: false
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
    if (e.target.value.includes("@")) {
      if (e.target.value.includes(".com")) {
        this.setState({ valid_email: true });
      } else {
        this.setState({ valid_email: false });
      }
    } else {
      this.setState({ valid_email: false });
    }
  };

  render() {
    return (
      <div className="body">
        <head>
          <link
            // href="https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <header>
          <div class="row">
            <div class="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <div style={{ float: "right", marginTop: 100 }}>
              <Link to="/admin" style={{ color: "white" }}>
                ADMIN LOGIN
              </Link>
            </div>
          </div>
          <div class="hero">
            <h1>
              A HEALTHY FOOD <br />
              FOR A WEALTHY MOOD!
            </h1>
            <div class="button-awesome">
              <Link to="/Menu" style={{ color: "white" }}>
                <a href="#" class="btn btn-full">
                  I'm Hungry
                </a>
              </Link>

              {/* <Link to="/login" style={{ color: "white" }}>
                <a href="#" class="btn btn-full">
                  Login
                </a>
              </Link> */}
            </div>
          </div>
        </header>
        <section class="features">
          <h3 class="text-center">THE CHEF'S RECIPES</h3>
          <p class="copy">
            Hello, we're Chef's Recipes, your new premium food delivery service.
            We know that you are always busy with your hectic work. No time for
            cooking. So, let us take care of that, we are really good aat it, we
            promise!.
          </p>
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <i class="fa fa-calendar"></i>
                <h4 style={{ marginLeft: 75, marginTop: 20 }}>
                  UPTO 365 DAYS/YEAR
                </h4>
                <p
                  style={{
                    marginLeft: 30,
                    textAlign: "justify",
                    marginTop: 10
                  }}
                >
                  Never cook again! We really mean that. Our food delivery
                  service include upto 365 days/year coverage. You can also
                  order anytime more flexibly if that's your style. We also
                  provide delivery services on holidays.
                </p>
              </div>
              <div> </div>
              <div>
                <i class="fa fa-clock-o"></i>
                <h4 style={{ marginLeft: 53, marginTop: 20 }}>
                  READY IN 20 MINUTES
                </h4>
                <p
                  style={{
                    marginLeft: 30,
                    textAlign: "justify",
                    marginTop: 10
                  }}
                >
                  You are only 20 minutes away from your delicious and super
                  healthy meals delivered right to your place. We work with the
                  best chefs in each block to ensure that you are 100% happy.
                </p>
              </div>
              <div>
                <i class="fa fa-signing"></i>
                <h4 style={{ marginLeft: 89, marginTop: 20 }}>100% ORGANIC</h4>
                <p
                  style={{
                    marginLeft: 30,
                    textAlign: "justify",
                    marginTop: 10
                  }}
                >
                  All our vegetables are fresh, organic and local. Fruits and
                  vegetables are raised without adding any type of hormones or
                  antibiotics. Good for your health, the environment and it also
                  tastes better!
                </p>
              </div>
              <div>
                <i class="fa fa-shopping-cart"></i>
                <h4 style={{ marginLeft: 71, marginTop: 20 }}>
                  ORDER ANYTHING
                </h4>
                <p
                  style={{
                    marginLeft: 30,
                    marginRight: 30,
                    textAlign: "justify",
                    marginTop: 10
                  }}
                >
                  We don't limit your creativity, which meansyou can order
                  whatever you feel like. You can also choose from our menu
                  containing over various delicious meals and items. It's upto
                  you!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="meal">
          <h3 class="text-center">OUR MENU</h3>
          <ul class="meal-showcase clearfix">
            <li>
              <figure class="meal-photo">
                <img src={img1} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img2} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img3} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img4} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img5} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img6} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img7} />
              </figure>
            </li>
            <li>
              <figure class="meal-photo">
                <img src={img8} />
              </figure>
            </li>
          </ul>
        </section>
        <section class="mobile">
          <h3 class="text-center">HOW IT WORKS - SIMPLE AS 1, 2, 3</h3>
          <div style={{ display: "flex" }}>
            <div class="" style={{ flex: 1, marginLeft: 200 }}>
              <img src={img12} />
            </div>
            <div class="works-step" style={{ flex: 2, marginTop: 200 }}>
              <div style={{ margin: 10 }}>
                <p>1</p> Choose the subscription plan that best fits your needs
                and sign in today
              </div>

              <div style={{ margin: 10 }}>
                <p>2</p> Order your delicious meal using our mobile app or
                website or you can even call us!
              </div>

              <div style={{ margin: 10 }}>
                <p>3</p> Enjoy your meal in 20 minutes from the order time. See
                you the next time!
              </div>

              <a href="">
                <img src={img11} />
              </a>
              <a href="">
                <img src={img13} />
              </a>
            </div>
          </div>
        </section>
        <section class="blocks">
          <h3 class="text-center">WE ARE CURRENTLY IN THESE BLOCKS</h3>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, margin: 20 }}>
              <img src={img40} />
              <h4 style={{ marginTop: 5, marginBottom: 5 }}>CAMPUS CAFE</h4>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-user"></i> 200+ Happy Eaters
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-star"></i> 15+ Top Chefs
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-twitter"></i> @chefsrecipes_campuscafe
              </p>
            </div>
            <div style={{ flex: 1, margin: 20 }}>
              <img src={img41} />
              <h4 style={{ marginTop: 5, marginBottom: 5 }}>CSE BLOCK</h4>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-user"></i> 300+ Happy Eaters
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-star"></i> 20+ Top Chefs
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-twitter"></i> @chefsrecipes_blockcse
              </p>
            </div>
            <div style={{ flex: 1, margin: 20 }}>
              <img src={img42} />
              <h4 style={{ marginTop: 5, marginBottom: 5 }}>BOYS HOSTEL-1</h4>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-user"></i> 250+ Happy Eaters
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-star"></i> 25+ Top Chefs
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-twitter"></i> @chefsrecipes_bh1
              </p>
            </div>
            <div style={{ flex: 1, margin: 20 }}>
              <img src={img43} />
              <h4 style={{ marginTop: 5, marginBottom: 5 }}>BOYS HOSTEL-2</h4>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-cog"></i> 350+ Happy Eaters
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-star"></i> 50+ Top Chefs
              </p>
              <p style={{ marginTop: 5, marginBottom: 5 }}>
                <i class="fa fa-twitter"></i> @chefsrecipes_bh2
              </p>
            </div>
          </div>
        </section>
        <section class="services">
          <h3 class="text-center">OUR CUSTOMERS CAN'T LIVE WITHOUT US</h3>
          <div style={{ display: "flex" }}>
            <div>
              <p style={{ margin: 35 }}>
                Chef's Recipes is just awesome! I just started my teaching at
                LPU which leaves me with no time for cooking, so Chef's Recipes
                is a life-saver. Now that I got used to it, I couldn't live
                without my daily meals!
              </p>
              <cite style={{ margin: 35 }}>
                <img src={img25} />
                Priya Chawla - Faculty
              </cite>
            </div>
            <div>
              <p style={{ margin: 35 }}>
                Inexpensive, healthy and great-tasting meals, delivered right to
                my cabin. We have lots of food delivery here in LPU, but no one
                comes even close to Chef's Recipes. Me and my colleagues are so
                in love!
              </p>
              <cite style={{ margin: 35 }}>
                <img src={img26} />
                Anita Rathod - Faculty
              </cite>
            </div>
            <div>
              <p style={{ margin: 35 }}>
                I was looking for a quick and easy food delivery service in LPU.
                I tried a lot of them and ended up with Chef's Recipes. Best
                food delivery service in the Lovely Professional University
                campus. Keep up the great work!
              </p>
              <cite style={{ margin: 35 }}>
                <img src={img27} />
                Ayushman Mishra - Student
              </cite>
            </div>
          </div>
        </section>
        <section class="form">
          <h3 class="text-center">WE ARE HAPPY TO HEAR FROM YOU</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingLeft: 200,
                marginTop: 50,
                height: 100
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                class="form-control"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
                style={{
                  flex: 1,
                  margin: 20,
                  marginBottom: 0,
                  marginTop: 0,
                  width: 200,
                  borderBottomColor: this.state.name === "" ? "red" : "green"
                }}
              />
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  margin: 20,
                  width: 200,
                  borderBottomColor: this.state.valid_email ? "green" : "red"
                }}
                onChange={this.handleEmail}
                value={this.state.email}
              />
            </div>

            <div
              style={{
                flex: 3,
                display: "flex",
                flexDirection: "column",
                paddingRight: 200,
                paddingTop: 50,
                paddingLeft: 20
              }}
            >
              <textarea
                class="form-control"
                rows="8"
                placeholder="Your message"
                onChange={e => {
                  this.setState({ message: e.target.value });
                }}
                value={this.state.message}
                style={{
                  flex: 1,
                  borderBottomColor: this.state.message === "" ? "red" : "green"
                }}
              ></textarea>
              <button
                class="btn btn-warning btn-block"
                style={{ flex: 1, marginBottom: 10 }}
                onClick={() => {
                  this.state.valid_email
                    ? alert("Thank You..")
                    : alert("Fill all Info correctly");
                }}
              >
                Send it!
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
