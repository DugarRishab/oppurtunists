import "./Navbar.css";
import React from "react";

const Navbar = () => {
	return (
		<div className="navBar">
			<div className="logoDiv">
				<h1>forward</h1>
			</div>

			<div className="menu">
				<ul>
					<li className="menuList"><a href="/">Home</a></li>
					<li className="menuList"><a href="/about">About</a></li>
					<li className="menuList"><a href="/register">Register</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

