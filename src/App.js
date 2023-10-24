import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { firebaseAuth, onAuthStateChanged  } from "./components/firebaseConfig";
import Header from './components/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Membership from './pages/Membership';
import Footer from './components/Footer';
import Login from './pages/Login';
import Account from './pages/Account';


function App() {
  // 로그인/로그아웃 상태
  const [isLogIn, setIsLogIn] = useState(false);
  console.log("앱영역-로그인상태 : ", isLogIn);

  // 사용자 프로필
  const [userDisplayName, setUserDisplayName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhotoURL, setUserPhotoURL] = useState();
  const [userEmailVerified, setUserEmailVerified] = useState();

  const userInfo = {
    userDisplayName : userDisplayName,
    userEmail : userEmail,
    userPhotoURL : userPhotoURL,
    userEmailVerified : userEmailVerified
  }

  // 컴포넌트가 렌더링된 이후에 비동기적으로 처리되어야하는 작업 수행
  useEffect(()=>{
    // 현재 로그인한 사용자 가져오기 : Auth 객체에 관찰자를 설정(권장)
    onAuthStateChanged(firebaseAuth, (user) => {
      // user가 관찰되면
      if (user) {
        // 로그인 상태
        setIsLogIn(true);
        // 사용자 프로필 가져오기
        const user = firebaseAuth.currentUser;
        if (user !== null) {
            setUserDisplayName(user.displayName);
            setUserEmail(user.email);
            setUserPhotoURL(user.photoURL);
            setUserEmailVerified(user.emailVerified);
        }
      }
      // user 안 보이면
      else {
        // 로그아웃 상태
        setIsLogIn(false);
      }
    });
  }, []);




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
            element={ <Login /> } />
          <Route path='/account'
            element={ <Account userInfo={userInfo} /> } />
          {/* 상단에 위치한 route들의 규칙 모두 확인 후 일치하는 route가 없는 경우 하단 처리 */}
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
