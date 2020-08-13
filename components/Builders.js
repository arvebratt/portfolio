import styled from 'styled-components';

export const Title = styled.p`
    margin-top: 0rem;
    color: black;
    font-size: 4rem;
`;

export const UnderTitle = styled.p`
    margin-top: 0rem;
    color: black;
    font-size: 2rem;
`;

export const UnderTitleBlack = styled.p`
    margin-top: 0rem;
    color: black;
    font-size: 2rem;
`;

export const CodingCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    color: black;
    background-color: #fef5e7;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }
`;

export const CodingCardText = styled.div`
    padding: 2px 16px;
`;
