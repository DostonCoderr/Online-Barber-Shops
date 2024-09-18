// BottomNavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RoomIcon from "@mui/icons-material/Room"; // Location icon
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import "./BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" activeClassName="active" className="nav-item">
        <HomeIcon fontSize="large" /> {/* Home Icon */}
        <span>Home</span>
      </NavLink>
      <NavLink to="/list" activeClassName="active" className="nav-item">
        <ListAltIcon fontSize="large" /> {/* List Icon */}
        <span>List</span>
      </NavLink>
      <NavLink to="/invite" activeClassName="active" className="nav-item">
        <GroupAddIcon fontSize="large" /> {/* List Icon */}
        <span>InviteFriend</span>
      </NavLink>
      {localStorage.getItem("userRole") === "Barber" ? (
        <NavLink to="/add" activeClassName="active" className="nav-item">
          <AddCircleIcon fontSize="large" /> {/* New Post Icon */}
          <span>New Post</span>
        </NavLink>
      ) : null}
      <NavLink to="/location" activeClassName="active" className="nav-item">
        <RoomIcon fontSize="large" /> {/* Location Icon */}
        <span>Location</span>
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="nav-item">
        <PersonIcon fontSize="large" /> {/* Profile Icon */}
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
