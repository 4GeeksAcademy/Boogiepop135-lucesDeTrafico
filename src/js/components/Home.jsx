import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<div className="traffic-ligth">
			<div 
				onClick={() => setSelectedColor("red")}
				className={`light red ${selectedColor === "red" ? "glow" : ""}`}
			></div>
			<div 
				onClick={() => setSelectedColor("yellow")}
				className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}
			></div>
			<div 
				onClick={() => setSelectedColor("green")}
				className={`light green ${selectedColor === "green" ? "glow" : ""}`}
			></div>
		</div>
	);
};

export default Home;
