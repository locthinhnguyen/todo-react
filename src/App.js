import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import TodoDetail from './pages/TodoDetail';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tododetail/:id" element={<TodoDetail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
