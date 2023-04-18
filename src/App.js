import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import TopBar from './pages/topBar/TopBar'
import SideBar from './pages/SideBar/SideBar'

function App() {

  let router = useRoutes(routes)


  return (
    <>
      <TopBar></TopBar>
      <div className='Container'>
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
