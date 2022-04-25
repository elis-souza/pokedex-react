import styled from "styled-components";

export const Container = styled.div`
    background: var(--header);
    display: flex;
    flex-direction: row;
    justify-content: center;

    .imgLogo {
        max-width: 1200px;
        display: flex;
        justify-content: center;
        padding: 0.9rem;
    }

    .imgLogo img {
        width: 40%;
        height: auto;
    }
`;

