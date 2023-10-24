// 회원가입 페이지

import { useState } from 'react';
import { firebaseAuth, createUserWithEmailAndPassword } from '../components/firebaseConfig';



export default function Membership(){
    const [emailInfo, setEmailInfo] = useState("");
    const [passwordInfo, setPasswordInfo] = useState("");
    const [nameInfo, setNameInfo] = useState("");

    // 이메일 주소 유효성 검사
    const validEmail = (e)=>{
        setEmailInfo(e.target.value);
    };
    // 비밀번호 유효성 검사
    const validPassword = (e)=>{
        setPasswordInfo(e.target.value);
    };
    // 닉네임 유효성 검사
    const validName = (e)=>{
        setNameInfo(e.target.value);
    };

    // 회원가입 버튼 클릭시
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log("회원가입 버튼 클릭 : ", emailInfo, passwordInfo);

        // 입력된 이메일, 비밀번호 가져오기
        const email = emailInfo;
        const password = passwordInfo;

        // 이메일과 비밀번호를 가지고 유저 등록하기
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("회원가입 성공 : ", user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("회원가입 실패 : ", errorCode, " | ", errorMessage);
            // ..
        });
    };

    return(
        <>
            <h2>회원가입</h2>
            <form>
                <input type="text"
                    placeholder="이메일"
                    onChange={validEmail} />
                <input type="password" 
                    placeholder="비밀번호"
                    onChange={validPassword} />
                <input type='text'
                placeholder='닉네임'
                onChange={validName} />
                <button id="submit-button" onClick={()=>handleRegister}>회원가입하기</button>
            </form>
        </>
    )
}