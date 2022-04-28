import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Tasks from './screens/Tasks';
import Details from './screens/Details';
import {Page404} from './screens/404';

const App = () => {

	return (
		<div className='md:w-[500px] w-72 mx-7 min-h-fit border-2 border-lime-400 p-7 rounded-xl text-white text-center font-sans'>
			<Routes>
				<Route path='/' element={<Tasks />} />
				<Route path='/details/:title' element={<Details />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	);
};

export default App;
