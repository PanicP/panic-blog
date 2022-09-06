import HeaderWithDetail from 'components/components/HeaderWithDetail/HeaderWithDetail'
import film from 'images/film.jpg'
import { StyledBodyContainer, StyledDetailContainer, StyledHomepage, StyledImageContainer } from './Homepage.styled'

const Homepage = () => {
    return (
        <StyledHomepage>
            {/* banner */}
            <div>Th</div>
            {/* image */}
            <StyledBodyContainer>
                <StyledImageContainer>
                    <img src={film} alt="profile" width={300}></img>
                </StyledImageContainer>
                {/* detail  */}
                <StyledDetailContainer>
                    <HeaderWithDetail header={'Thunthian Pornmuneewong'} details={['im average', 'gamers']} />
                </StyledDetailContainer>
            </StyledBodyContainer>
        </StyledHomepage>
    )
}

export default Homepage
