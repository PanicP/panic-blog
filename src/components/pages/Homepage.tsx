import HeaderWithDetail from 'components/components/HeaderWithDetail'
import film from 'images/film.jpg'
const Homepage = () => {
    return (
        <div>
            {/* image */}
            <div>
                <img src={film} alt="profile"></img>
            </div>
            {/* detail  */}
            <div>
                <HeaderWithDetail header={'Thunthian Pornmuneewong'} details={['im average', 'gamers']} />
            </div>
        </div>
    )
}

export default Homepage
