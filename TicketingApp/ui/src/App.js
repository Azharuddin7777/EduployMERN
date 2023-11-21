import { Outlet } from 'react-router-dom';
import Login from './features/user/Login';
import Header from './features/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
