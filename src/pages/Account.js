// 마이페이지


export default function Account(props){

    return(
        <>
            <h2>마이페이지</h2>
            <h4>{"닉네임 : " + props.userInfo.userDisplayName }</h4>
            <h4>{"이메일주소 : " + props.userInfo.userEmail }</h4>
            <h4>{"사진경로 : " + props.userInfo.userPhotoURL }</h4>
            <h4>{"이메일인증 여부 : " + props.userInfo.userEmailVerified }</h4>
        </>
    )
}