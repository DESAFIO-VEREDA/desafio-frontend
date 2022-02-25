import styled from "styled-components";

const Card = styled.section`
    display: flex;
    flex-direction: row;
    width: 220px;
    height: 160px;
    border-radius: 25px;
    background-color: azure;

    img {
        width: 100px;
        height: 150px;
        margin-top: 10%;
        margin-right: 300px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        margin-left: 10px;

        h2 {
            margin-bottom: 10px;
        }

        ul {
            width: 35px;
            display: flex;
            flex-direction: column;
            li {
                border-radius: 10px;
                background-color: red;
                color: white;
                margin-bottom: 5px;
                padding-left: 5px;
                filter: brightness(1.5);

                p {
                    filter: brightness(1)
                }
            }

        }

    }
`

export default Card