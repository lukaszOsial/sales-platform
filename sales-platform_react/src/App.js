import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListContractorComponent from "./components/contractor/ListContractorComponent";
import ListProductComponent from "./components/product/ListProductComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateContractorComponent from "./components/contractor/CreateContractorComponent";
import HomeComponent from "./components/home/HomeComponent";

function App() {
	return (
		<div>
			<Router>
				<HeaderComponent />
				<div className='container'>
					<Routes>
						<Route exact path ='/' element={<HomeComponent/>}/>
						<Route path ='/contractors' element={<ListContractorComponent/>}/>
						<Route path ='/products' element={<ListProductComponent/>}/>
						<Route path ='/add-contractor/:id' element={<CreateContractorComponent/>}/>
					</Routes>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
