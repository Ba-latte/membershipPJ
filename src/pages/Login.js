// 로그인 페이지

import { useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword } from "../components/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    // 유저가 입력한 이메일
    const [userEmail, setUserEmail] = useState();
    // 유저가 입력한 비밀번호
    const [userPassword, setUserPassword] = useState();

    const [message, setMessage] = useState("");


    // 유저 이메일 유효성 검사
    const validUserEmail = (e)=>{
        setUserEmail(e.target.value);
    };

    // 유저 비밀번호 유효성 검사
    const validUserPassword = (e)=>{
        setUserPassword(e.target.value);
    };

    // 로그인하기 버튼 클릭시
    const handleLogIn = (e)=>{
        e.preventDefault();
        console.log("로그인하기 버튼 클릭 : ");

        const email = userEmail;
        const password = userPassword;

        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            console.log("로그인 성공 : ", userCredential.user);

            setMessage(userCredential.user.displayName + "님 로그인 성공!");
        })
        .catch((error) => {
            console.log("로그인 실패 : ", error.code, " | ", error.message);
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