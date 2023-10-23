// 회원가입 페이지

import { firebaseAuth, createUserWithEmailAndPassword } from '../components/firebaseConfig';


export default function Membership(){
    const handleSubmit = ()=>{
        console.log("회원가입 버튼 클릭");
    };

    return(
        <>
            <h2>회원가입</h2>
            <form>
                <input type="text" placeholder="이메일" />
                <input type="password" placeholder="비밀번호" />
                <button id="submit-button" onClick={(e)=>{
                    e.preventDefault();
                    handleSubmit();
                    }}>회원가입하기</button>
            </form>
        </>
    )
}