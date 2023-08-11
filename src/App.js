// import { useEffect } from 'react';
// import './App.css';
// import { userApi } from './apis/user';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Homepage } from './components/Homepage';
// import { Register } from './components/Register';
// import { Login } from './components/Login';

// function App() {
//   // const login = async () => {
//   //   const res = await userApi.login({
//   //     email: 'hatlt.min3@gmail.com',
//   //     password: '123456',
//   //   });

//   //   console.log('res: ', res);
//   // };

//   // useEffect(() => {
//   //   login();
//   // }, []);

//   return (
//     <div className="App">
//       <Routes>
//         <Route index element={<Homepage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import TodoDetail from './pages/TodoDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tododetail/:detail" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
