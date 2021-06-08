import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Main/MainComponent";
import LeftSection from "./Main/LeftSection";
import BottomSection from "./Main/BottonSection";
const App = () => {
	return (
		<div>
			<LeftSection />
			<MainComponent />
			<BottomSection />
		</div>
	);
};

export default App;
