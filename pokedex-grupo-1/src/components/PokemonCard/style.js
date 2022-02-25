import styled from "styled-components";
import backgroundImage from '../../assets/Poké_color_cinza.png';

const Card = styled.section`
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 160px;
    border-radius: 25px;
    background-color: ${(props) => props.background};
    background-image: url(${backgroundImage});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;

    img {
        width: 140px;
        aspect-ratio: 1/1;
        margin-top: 10%;
        margin-right: 300px;
        object-fit: cover;
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
            display: flex;
            flex-direction: column;
            li {
                width: 70px;
                border-radius: 10px;
                background-color: ${(props) => props.background};
                color: white;
                margin-bottom: 5px;
                padding-left: 5px;
                filter: brightness(1.5);

                p {
                    filter: brightness(1);
                    text-align: center;
                }
            }

        }

    }
`

export default Card