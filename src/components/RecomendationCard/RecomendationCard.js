import styled from "styled-components"
import { Title } from "../Title/Title"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Description = styled.p`
    max-width: 300px;
`

const Subtitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const BookImg = styled.img`
    width: 150px;
`

function RecomendationCard(props) {
    return (
        <Card>
            <div>
                <Title fontSize="16px" color="#EB9B00" textAlign="left">{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
                <Description>{props.description}</Description>
            </div>
            <div>
                <BookImg src={props.img} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

export default RecomendationCard