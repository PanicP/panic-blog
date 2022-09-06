import styled from 'styled-components'

export const StyledHeaderWithDetail = styled.div`
    > div:nth-child(1) {
        font-size: 1.5rem;
    }

    > div:nth-child(2) {
        > div {
            font-size: 1rem;
            color: dimgrey;
        }
    }
`
