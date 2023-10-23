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
`;

export default function Header(){
    return(
        <HeaderContainer>
            <h1><Link to={'/'}>로고</Link></h1>
            <nav>
                <ul className="menu">
                    <li className="item">
                        <Link to={'/login'}>로그인</Link>
                    </li>
                    <li className="item"> | </li>
                    <li className="item">
                        <Link to={'/membership'}>회원가입</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}