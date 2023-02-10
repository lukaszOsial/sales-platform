import "./App.css";
import ListContractorComponent from "./components/contractor/ListContractorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
	return (
		<div>
			<HeaderComponent />
			<div className='container'>
				<ListContractorComponent />
			</div>
			<FooterComponent/>
		</div>
	);
}

export default App;
