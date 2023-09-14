import logo from './logo.svg';
import './App.css';
import Relogio from './components/Relogio';
import { Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaInicial from './screens/PaginaInicial';
import PaginaContato from './screens/PaginaContato';

const router = createBrowserRouter(
  [
    {
      path: "*",
      Component: RootNavigation
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

function RootNavigation(){
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial/>} />
      <Route path="/contato" element={<PaginaContato/>} />
    </Routes>
  )
}

export default App;
