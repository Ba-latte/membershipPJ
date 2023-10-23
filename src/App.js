import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Membership from './pages/Membership';
import Footer from './components/Footer';
import Login from './pages/Login';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 헤더는 모든 URL에 공통 적용할 컴포넌트니까 최상단에 위치해야함 */}
        <Header />
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/membership' element={ <Membership /> } />
          <Route path='/login' element={ <Login /> } />
          {/* 상단에 위치한 route들의 규칙 모두 확인 후 일치하는 route가 없는 경우 하단 처리 */}
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
