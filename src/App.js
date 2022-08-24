import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ActivityPage from './components/ActivityPage/ActivityPage';
import TodoPage from './components/TodoPage/TodoPage';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='AppBody'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityPage />}/>
          <Route path="/todo/:todoID" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}
