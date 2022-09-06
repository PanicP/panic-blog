import { tHeaderWithDetail } from 'types/HeaderWithDetail'
import { StyledHeaderWithDetail } from './HeaderWithDetail.styled'

const HeaderWithDetail = ({ header, details }: tHeaderWithDetail) => {
    return (
        <StyledHeaderWithDetail>
            <div>{header}</div>
            <div>
                {details.map((detail) => (
                    <div>{detail}</div>
                ))}
            </div>
        </StyledHeaderWithDetail>
    )
}

export default HeaderWithDetail
