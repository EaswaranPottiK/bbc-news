import logo from './logo.svg';
import './App.css';
import Login from './Componenets/Login';
import Navbar from './Componenets/Navbar';
import Main from './Componenets/Main';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>
    },
  ])
  return (
    <div>
      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
