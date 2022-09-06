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
                    <HeaderWithDetail
                        header={'Professional Experience'}
                        details={[
                            'Satang Corporation',
                            'Hive Ventures',
                            'Appman',
                            'Fillgoods',
                            'Kingpower Click',
                            'Bangkok Bank',
                        ]}
                    />
                    <HeaderWithDetail
                        header={'More about me'}
                        details={[
                            'Rhythm games enjoyer',
                            'Doggos are friend (Most of animals are fine)',
                            'Passionate about astrology (Everything beyond our sky is awesome.)',
                        ]}
                    />
                </StyledDetailContainer>
            </StyledBodyContainer>
        </StyledHomepage>
    )
}

export default Homepage
