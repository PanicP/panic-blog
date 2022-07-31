import useResponsive from 'hooks/useResponsive'
import styled from 'styled-components'

type tPagePadding = {
    children: React.ReactNode
    backgroundColor?: string
}

type tStyledPadding = {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    backgroundColor: string
}

const LayoutPagePadding: React.FC<tPagePadding> = ({ children, backgroundColor = '#F8F8F8' }) => {
    const { isMobile, isTablet, isDesktop } = useResponsive()
    return (
        <StyledPadding isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} backgroundColor={backgroundColor}>
            {children}
        </StyledPadding>
    )
}

export default LayoutPagePadding

const StyledPadding = styled.div<tStyledPadding>`
    ${(props) => props.isMobile && 'padding-left: 5%; padding-right: 5%;'}
    ${(props) => props.isTablet && 'padding-left: 15%; padding-right: 15%;'}
    ${(props) => props.isDesktop && 'padding-left: 20%; padding-right: 20%;'}
    ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`}
`
