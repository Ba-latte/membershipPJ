// 로그인 페이지

export default function Login(){
    const handleSubmit = ()=>{
        console.log("로그인하기 버튼 클릭");
    };
    
    return(
        <>
        <h2>로그인</h2>
        <form>
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <button id="submit-button" onClick={(e)=>{
                e.preventDefault();
                handleSubmit();
                }}>로그인하기</button>
        </form>
        </>
    )
}