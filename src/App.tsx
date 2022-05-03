import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Tasks from './screens/ToDo';
import Details from './screens/Details';
import {Page404} from './screens/404';

const App = () => {

	return (
			<div className='w-screen max-w-screen-sm font-sans text-center text-white border-2 min-h-fit border-lime-400 p-7 rounded-xl'>
				<Routes>
					<Route path='/' element={<Tasks />} />
					<Route path='/details/:title' element={<Details />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</div>
	)
};

export default App;
