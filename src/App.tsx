import './styles/App.css'

import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Page404 } from './screens/404'
import Details from './screens/Details'
import Tasks from './screens/ToDo'

const App = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route path='/'>
				<Route index element={<Tasks />} />
				<Route path='details/:title' element={<Details />} />
				<Route path='*' element={<Page404 />} />
			</Route>
		</Route>
	</Routes>
)

export default App
