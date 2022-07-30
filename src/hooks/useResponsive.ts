import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)',
    })

    const isTablet = useMediaQuery({
        query: '(max-width: 1224px)',
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 786px)',
    })

    return {
        isDesktop,
        isTablet,
        isMobile,
    }
}

export default useResponsive
