import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListContractorComponent from "./components/contractor/ListContractorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
	return (
		<div>
			<Router>
				<HeaderComponent />
				<div className='container'>
					<Routes>
						<Route exact path ='/' element={<ListContractorComponent/>}/>
						<Route exact path ='/contractors' element={<ListContractorComponent/>}/>
					</Routes>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
