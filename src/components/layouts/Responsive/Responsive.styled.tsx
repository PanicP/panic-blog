import styled from 'styled-components'

export const ResponsiveDiv = styled.div`
    @media (max-width: 786px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (max-width: 1224px) {
        padding-left: 15%;
        padding-right: 15%;
    }

    @media (min-width: 1224px) {
        padding-left: 20%;
        padding-right: 20%;
    }
`
