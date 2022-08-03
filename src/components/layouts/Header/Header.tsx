// import LayoutPagePadding from '../PagePadding/PagePadding'
import { StyledHeader, StyledLogo } from './Header.styled'

const LayoutHeader: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo alt="image" />
            <div>test</div>
        </StyledHeader>
    )
}

export default LayoutHeader
