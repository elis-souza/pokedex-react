import styled from "styled-components";

interface cardInterface {
    type: string;
}

export const Container = styled.div<cardInterface>`
    max-width: 290px;
    background: ${props => 
        props.type === 'normal' ? 'var(--normal)'
        :props.type === 'grass' ? 'var(--grass)'
        : props.type === 'fire' ? 'var(--fire)'
        : props.type === 'water' ? 'var(--water)'
        : props.type === 'electric' ? 'var(--electric)'
        : props.type === 'ice' ? 'var(--ice)'
        : props.type === 'ground' ? 'var(--ground)'
        : props.type === 'flying' ? 'var(--flying)'
        : props.type === 'ghost' ? 'var(--ghost)'
        : props.type === 'rock' ? 'var(--rock)'
        : props.type === 'fighting' ? 'var(--fighting)'
        : props.type === 'poison' ? 'var(--poison)'
        : props.type === 'psychic' ? 'var(--psychic)'
        : props.type === 'bug' ? 'var(--bug)'
        : props.type === 'dark' ? 'var(--dark)'
        : props.type === 'steel' ? 'var(--steel)'
        : props.type === 'dragon' ? 'var(--dragon)'
        : props.type === 'fairy' ? 'var(--fairy)'
        : 'cyan' 
    };

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin: 0.5rem 1rem;
    border-radius: 0.8rem;

    transition: 0.1s;

    &:hover {
        transform: translateY(0.5rem);
    }

    .bgPokemon {
        max-width: 290px;
        display: flex;
        justify-content: center;
        /* padding: 0.5rem; */
        background: var(--card-top);
        border-radius: 50%;
        margin: 1rem;
    }

    .imagePoke img {
        width: 250px;
    }

    h4, span {
        color:  ${props => 
        props.type === 'normal' ? 'var(--normal-text)'
        :props.type === 'grass' ? 'var(--grass-text)'
        : props.type === 'fire' ? 'var(--fire-text)'
        : props.type === 'water' ? 'var(--water-text)'
        : props.type === 'electric' ? 'var(--electric-text)'
        : props.type === 'ice' ? 'var(--ice-text)'
        : props.type === 'ground' ? 'var(--ground-text)'
        : props.type === 'flying' ? 'var(--flying-text)'
        : props.type === 'ghost' ? 'var(--ghost-text)'
        : props.type === 'rock' ? 'var(--rock-text)'
        : props.type === 'fighting' ? 'var(--fighting-text)'
        : props.type === 'poison' ? 'var(--poison-text)'
        : props.type === 'psychic' ? 'var(--psychic-text)'
        : props.type === 'bug' ? 'var(--bug-text)'
        : props.type === 'dark' ? 'var(--dark-text)'
        : props.type === 'steel' ? 'var(--steel-text)'
        : props.type === 'dragon' ? 'var(--dragon-text)'
        : props.type === 'fairy' ? 'var(--fairy-text)'
        : 'cyan' 
        };
    }

    .tyPoke {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: var(--card-top);
        border-radius: 0.3rem;
        max-width: 100px;
        width: 100%;
        height: 30px;

        padding: 0.3rem;
        margin-bottom: 1rem;
        
        img {
            width: 25px;
            height: 25px;
        }

    }
    
`;