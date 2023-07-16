import React from "react";
import SecondsCounter from "/workspace/Simple-Counter-with-React/src/js/component/counter.jsx";


//create your first component
const Home = () => {
	return (
		<>
		
		<div className="text-center">
			<SecondsCounter/>
		</div>
		</>
	);
};

export default Home;