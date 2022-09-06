import styled from 'styled-components'

export const StyledHeaderWithDetail = styled.div`
    > div:nth-child(1) {
        font-size: 1.5rem;
    }

    > div:nth-child(2) {
        > div {
            font-size: 1rem;
            color: dimgrey;
            display: flex;
            gap: 0.5rem;

            > span:nth-child(1) {
                height: 0.3rem;
                width: 0.3rem;
                background-color: dimgrey;
                border-radius: 50%;
                display: inline-block;
                align-self: center;
            }

            > span:nth-child(2) {
            }
        }
    }
`
