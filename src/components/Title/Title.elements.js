import styled from 'styled-components'

import {FaGlobe} from 'react-icons/fa'

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const TitleHeader = styled.h1`
    color: #fff;
    font-size: 36px;
    font-weight: 500;
`;

export const TitleIconWrapper = styled.h1`
    padding-top: 10px;
    margin-top: 1rem;

`;

export const TitleIcon = styled(FaGlobe)`
`;