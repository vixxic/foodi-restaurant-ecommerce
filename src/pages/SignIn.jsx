import "../styles/sections/SignIn.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { GlobalContext } from "../globalContext/GlobalContext";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const dietaryPreferences = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Halal",
  "Kosher",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Low-Carb",
  "High-Protein",
];

function SignIn() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const {
    userName,
    setUserName,

    email,
    setEmail,

    password,
    setPassword,

    phoneNum,
    setPhoneNum,

    birthDate,
    setBirthDate,

    deliveryAddress,
    setDeliveryAddress,

    dietPrev,
    setDietPrev,

    setIsAuthentication,
  } = useContext(GlobalContext);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (
      userName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      phoneNum.length === 0 ||
      birthDate.length === 0 ||
      deliveryAddress.length === 0 ||
      dietPrev.length === 0
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setIsAuthentication(true);
    navigate("/home");

    setPassword("");
  };

  const handlePreference = (preference) => {
    if (dietPrev.includes(preference)) {
      setDietPrev(dietPrev.filter((item) => item !== preference));
    } else {
      setDietPrev([...dietPrev, preference]);
    }
  };

  return (
    <div className="sign-in-section">
      <div className="sign-in-form-title">
        <h1>Welcome</h1>
        <p>Please enter your details to sign in.</p>

        <span onClick={() => navigate("/home")}>
          <RxCross2 />
        </span>
      </div>

      <form onSubmit={handleSignIn} className="sign-in-form">
        <div className="sign-in-input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="sign-in-input-group">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="sign-in-input-group ">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              name="password"
              id="password"
              type={!showPass ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={handleShowPass}>
              {!showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>
        </div>

        <div className="sign-in-input-group">
          <label htmlFor="phone-num">Phone Number</label>
          <input
            name="phone-num"
            id="phone-num"
            type="text"
            value={phoneNum}
            placeholder="+1 (555) 123-4567"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>

        <div className="sign-in-input-group">
          <label htmlFor="date">DATE OF BIRTH</label>
          <input
            name="date"
            id="date"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="sign-in-input-group">
          <label htmlFor="delivery-address">DELIVERY ADDRESS</label>
          <input
            name="delivery-address"
            id="delivery-address"
            type="text"
            value={deliveryAddress}
            placeholder="123 Green Valley Road, Suite 402, Urban Eco City, 90210"
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </div>

        <div className="dietary-preferences-input">
          <p>Chose Your Dietary Preferences</p>
          <div className="preferences-con">
            {dietaryPreferences.map((preference, index) => (
              <span
                key={index}
                className={`pref-tag ${
                  dietPrev.includes(preference) ? "active" : ""
                }`}
                onClick={() => handlePreference(preference)}
              >
                {preference}
              </span>
            ))}
          </div>
        </div>

        {error ? (
          <p className="error-message ">Please fill all the form </p>
        ) : (
          ""
        )}
        <button type="submit" className="btn-submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
