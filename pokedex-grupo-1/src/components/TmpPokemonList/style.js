import styled from "styled-components";

export const LoadMore = styled.button`

font-size: 1.2rem; 

display:flex;
justify-content: center;
align-items: center;
gap:20px;

padding:8px 14px;
background-color: #e33131;
color:#fff;

border: 2px solid #e33131;
border-radius: 8px;

img {
    width:40px;
    height:40px;
}

:hover, :focus {
    outline: 1px solid transparent;
    border: 2px solid #333;
}
:active {
    filter:brightness(0.94)
}
`