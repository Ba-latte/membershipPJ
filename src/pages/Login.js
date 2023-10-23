// 로그인 페이지

import { useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword } from "../components/firebaseConfig";

export default function Login(){

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    // 유저 이메일 유효성 검사
    const validUserEmail = (e)=>{
        setUserEmail(e.target.value);
    };

    // 유저 비밀번호 유효성 검사
    const validUserPassword = (e)=>{
        setUserPassword(e.target.value);
    };

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
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("로그인 실패 : ", errorCode, " | ", errorMessage);
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
        </>
    )
}