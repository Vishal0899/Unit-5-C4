import axios from "axios";
import { useEffect, useState } from "react";

export const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <div style={{ margin: "1% 0 0 40%" }}>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        className="submit"
        onClick={() => {
          users.map((elem) =>
            elem.username == "admin" ? "/orders" : "/neworder"
          );
        }}
      >
        Login
      </button>
    </div>
  );
};
