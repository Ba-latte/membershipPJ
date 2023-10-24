import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Membership from './pages/Membership';
import Footer from './components/Footer';
import Login from './pages/Login';


function App() {
  // 로그인/로그아웃 상태
  const [isLogIn, setIsLogIn] = useState(false);
  const setLogInStatus = (boolean)=>{
    setIsLogIn(boolean);
  };

  console.log("앱영역-로그인상태 : ", isLogIn);
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 헤더는 모든 URL에 공통 적용할 컴포넌트니까 최상단에 위치해야함 */}
        <Header isLogIn={isLogIn} />
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/membership' element={ <Membership /> } />
          <Route 
            path='/login' 
            element={ <Login isLogIn={isLogIn} setLogInStatus={setLogInStatus} /> } />
          {/* 상단에 위치한 route들의 규칙 모두 확인 후 일치하는 route가 없는 경우 하단 처리 */}
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
