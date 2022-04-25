import styled from "styled-components";

export const Container = styled.div`
    .containerSearch {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    input {
        background-color: var(--text);
        border-radius: 0.5rem;
        border: none;
        color: var(--text-input);

        padding: 0.8rem;
        margin: 3rem 0;

        &::placeholder {
            text-align: center;
            color: var(--text-input);
        }
    }

`;