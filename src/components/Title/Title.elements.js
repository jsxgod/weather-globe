import styled from 'styled-components'

import {FaGlobe} from 'react-icons/fa'

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

export const TitleHeader = styled.h1`
    color: #fff;
    font-size: 36px;
    font-weight: 500;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const TitleIconWrapper = styled.h1`
    background-clip: text;
    padding-top: 10px;
    margin-top: 1rem;
    transition: 0.3s ease-in;

`;

export const TitleIcon = styled(FaGlobe)`
`;