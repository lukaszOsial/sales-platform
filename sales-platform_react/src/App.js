import "./App.css";
import ListContractorComponent from "./components/contractor/ListContractorComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
	return (
		<div>
			<HeaderComponent />
			<div className='container'>
				<ListContractorComponent />
			</div>
		</div>
	);
}

export default App;
