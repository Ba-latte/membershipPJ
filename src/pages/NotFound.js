// NotFound 페이지

import styled from "styled-components";

const NotFoundContainer = styled.section`
    text-align: center;
`;

export default function NotFound(){
    return(
        <NotFoundContainer>
            <h2>없는 페이지입니다</h2>
        </NotFoundContainer>
    )
}