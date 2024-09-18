import React from "react";
import "./Role.scss"
const Role = () => {
  function handleUser() {
    const user = "User";
    localStorage.setItem("userRole", user);
    window.location.href = "/register";
  }

  function handleBarber() {
    const barber = "Barber";

    localStorage.setItem("userRole", barber);
    window.location.href = "/register";
  }

  return (
    <main className="ternary">
      <div className="role">
        <button onClick={() => handleUser()}>User</button>
        <button onClick={() => handleBarber()}>Barber</button>
      </div>
    </main>
  );
};

export default Role;
