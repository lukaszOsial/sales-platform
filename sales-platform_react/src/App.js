import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListContractorComponent from "./components/contractor/ListContractorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateContractorComponent from "./components/contractor/CreateContractorComponent";

function App() {
	return (
		<div>
			<Router>
				<HeaderComponent />
				<div className='container'>
					<Routes>
						<Route exact path ='/' element={<ListContractorComponent/>}/>
						<Route path ='/contractors' element={<ListContractorComponent/>}/>
						<Route path ='/add-contractor' element={<CreateContractorComponent/>}/>
					</Routes>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
