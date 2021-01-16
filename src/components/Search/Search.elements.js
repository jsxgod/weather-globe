import styled from 'styled-components'


export const SearchContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 75px;
    margin-top: 20px;
`;

export const SearchBar = styled.input`
    text-align: center;
    display: block;
    width: 300px;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    margin-top: -25px;

    box-shadow: 0px 5px rgba(0,0,0,0.2);

    color: #fff;
    font-size: 20px;

    transition: 0.4s ease;

    &:focus {
        background-color: rgba(255, 255, 255, 0.1);

        ::placeholder{
            color: rgba(255, 255, 255, 0.4);
        }
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }

    ::placeholder{
        color: rgba(255, 255, 255, 0.3);
    }

`;