import styled from 'styled-components'
import { books } from '../LatestRealeases/LatestReleasesData'
import { Title } from '../Title/Title'
import bookImage from '../../assets/images/livro2.png'
import RecomendationCard from '../RecomendationCard/RecomendationCard'

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title>Últimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map((book) =>
                    <img src={book.src} alt={book.name} />
                )}
            </NewBooksContainer>
            <RecomendationCard title='Talvez você se interesse por' subtitle="Angular 11" description="Construindo uma aplicação com a plataforma Google" img={bookImage} />

        </LatestReleasesContainer>
    )
}
export default LatestReleases 