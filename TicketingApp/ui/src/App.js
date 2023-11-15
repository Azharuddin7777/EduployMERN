import { Outlet } from 'react-router-dom';
import Login from './features/user/Login';

function App() {
  return (
    <div>
     <h1>Ticketing App</h1>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
