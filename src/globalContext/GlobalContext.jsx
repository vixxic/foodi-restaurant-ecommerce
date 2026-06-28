import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "",
  );

  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const [password, setPassword] = useState("");

  const [isAuthentication, setIsAuthentication] = useState(
    JSON.parse(localStorage.getItem("isAuthentication")) || false,
  );

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const [phoneNum, setPhoneNum] = useState(
    localStorage.getItem("phoneNum") || "",
  );

  const [birthDate, setBirthDate] = useState(localStorage.getItem("date"));

  const [deliveryAddress, setDeliveryAddress] = useState(
    localStorage.getItem("deliveryAddress"),
  );

  const [dietPrev, setDietPrev] = useState(() => {
    return JSON.parse(localStorage.getItem("dietPrev")) || [];
  });

  const [like, setLike] = useState(() => {
    return JSON.parse(localStorage.getItem("like")) || [];
  });

  useEffect(() => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("isAuthentication", JSON.stringify(isAuthentication));
    localStorage.setItem("phoneNum", phoneNum);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("deliveryAddress", deliveryAddress);
    localStorage.setItem("dietPrev", JSON.stringify(dietPrev));
    localStorage.setItem("like", JSON.stringify(like));
  }, [
    userName,
    email,
    cartItems,
    isAuthentication,
    phoneNum,
    birthDate,
    deliveryAddress,
    dietPrev,
    like,
  ]);

  const logout = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setIsAuthentication(false);
    setCartItems([]);
    setPhoneNum("");
    setBirthDate("");
    setDeliveryAddress("");
    setDietPrev([]);
    setLike([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        userName,
        setUserName,

        email,
        setEmail,

        password,
        setPassword,

        isAuthentication,
        setIsAuthentication,

        cartItems,
        setCartItems,

        phoneNum,
        setPhoneNum,

        birthDate,
        setBirthDate,

        deliveryAddress,
        setDeliveryAddress,

        dietPrev,
        setDietPrev,

        like,
        setLike,

        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
