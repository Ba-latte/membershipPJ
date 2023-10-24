// 헤더 컴포넌트

import { Link } from "react-router-dom";
import styled from 'styled-components';


const HeaderContainer = styled.header`
    height: 60px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;

    .menu{
        display: flex;
        gap: 10px;
    }
    .logout-button{
        cursor: pointer;
    }
`;

export default function Header(props){
    console.log("헤더영역-로그인상태 : ", props.isLogIn);

    // 로그아웃 버튼 클릭시
    const handleLogOut = ()=>{
        console.log("로그아웃 버튼 클릭");
    };

    return(
        <HeaderContainer>
            <h1><Link to={'/'}>로고</Link></h1>
            <nav>
                {
                    // isLogIn 상태에 따른 UI 변경 - ture: 로그인중 / false: 로그아웃중
                    props.isLogIn ?
                    <ul className="menu">
                        <li className="item">
                            <Link to={'/account'}>마이페이지</Link>
                        </li>
                        <li className="item"> | </li>
                        <li className="item">
                            <button className="logout-button" onClick={handleLogOut}>로그아웃</button>
                        </li>
                    </ul>
                    :
                    <ul className="menu">
                        <li className="item">
                            <Link to={'/login'}>로그인</Link>
                        </li>
                        <li className="item"> | </li>
                        <li className="item">
                            <Link to={'/membership'}>회원가입</Link>
                        </li>
                    </ul>
                }
            </nav>
        </HeaderContainer>
    )
}