import { tHeaderWithDetail } from 'types/HeaderWithDetail'

const HeaderWithDetail = ({ header, details }: tHeaderWithDetail) => {
    return (
        <div>
            <div>{header}</div>
            <div>
                {details.map((detail) => (
                    <div>{detail}</div>
                ))}
            </div>
        </div>
    )
}

export default HeaderWithDetail
