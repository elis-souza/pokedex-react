import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: var(--header);
    padding-bottom: 3rem;

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.9rem;
        justify-items: center;

        max-width: 1020px;
        width: 100%;
        
        background: var(--text);

        padding: 1.5rem 2rem;
        border-radius: 0.5rem;

    }
    
`;