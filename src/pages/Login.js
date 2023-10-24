// 로그인 페이지

import { useEffect, useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword } from "../components/firebaseConfig";

export default function Login(props){

    // 유저가 입력한 이메일
    const [userEmail, setUserEmail] = useState();
    // 유저가 입력한 비밀번호
    const [userPassword, setUserPassword] = useState();

    // 로그인/로그아웃 상태
    const isLogIn = props.isLogIn;

    const [message, setMessage] = useState("");


    // 유저 이메일 유효성 검사
    const validUserEmail = (e)=>{
        setUserEmail(e.target.value);
    };

    // 유저 비밀번호 유효성 검사
    const validUserPassword = (e)=>{
        setUserPassword(e.target.value);
    };

    // 컴포넌트가 렌더링된 이후에 비동기적으로 처리되어야하는 작업 수행
    useEffect(()=>{
        console.log("(로그인-useEffect)로그인 상태야? : ", isLogIn);

    }, [isLogIn]);

    // 로그인하기 버튼 클릭시
    const handleLogIn = (e)=>{
        e.preventDefault();
        console.log("로그인하기 버튼 클릭 : ", userEmail, userPassword);

        const email = userEmail;
        const password = userPassword;

        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("로그인 성공 : ", user);

            props.setLogInStatus(true);
            console.log("로그인 상태야? : ", isLogIn);

            setMessage(user.displayName + "님 로그인 성공!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("로그인 실패 : ", errorCode, " | ", errorMessage);
            setMessage("로그인 실패!");
        });
    };
    
    return(
        <>
        <h2>로그인</h2>
        <form>
            <input type="text" 
            placeholder="이메일"
            onChange={validUserEmail} />
            <input type="password" 
            placeholder="비밀번호"
            onChange={validUserPassword} />
            <button id="submit-button" onClick={handleLogIn}>로그인하기</button>
        </form>
        <h4>{message}</h4>
        </>
    )
}