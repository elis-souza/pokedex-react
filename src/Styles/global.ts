import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }


    body {
        background: var(--card-top);
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif;
    }

    h1 {
        color: var(--text);
        padding: 1rem;
        font-size: 1.5rem;

        &::first-letter {
        text-transform: capitalize;
        }
    }

    h4 {
        padding-bottom: 1rem;
    }

    span {
        color: var(--text);
        padding-left: 0.6rem;

        &::first-letter {
        text-transform: capitalize;
        }
    }

    button {
        cursor: pointer;
    }


    :root {
        --normal: #a4acaf;
        --fire: #fd7d24;
        --water: #4592c4;
        --electric: #eed535;
        --grass: #9bcc50;
        --ice: #51c4e7;
        --ground: #DA7C4D;
        --flying: #3dc7ef;
        --ghost: #7b62a3;
        --rock: #a38c21;
        --fighting: #d56723;
        --poison: #b97fc9;
        --psychic: #f366b9;
        --bug: #729f3f;
        --dark: #707070;
        --steel: #9eb7b8;
        --dragon: #0C69C8;
        --fairy: #fdb9e9;

        --normal-text: #545c5f;
        --fire-text: #974002;
        --water-text: #1f4661;
        --electric-text: #8d7c0c;
        --grass-text: #557722;
        --ice-text: #157d9d;
        --ground-text: #7f3c1a;
        --flying-text: #0b718e;
        --ghost-text: #3c2f50;
        --rock-text: #2a2409;
        --fighting-text: #582a0e;
        --poison-text: #6e357e;
        --psychic-text: #bd0f74;
        --bug-text: #273716;
        --dark-text: #262626;
        --steel-text: #577475;
        --dragon-text: #042648;
        --fairy-text: #a85991;

        --header: #ced6f0;
        --card-top: #f8f8f8;
        --text: #fff;
        --text-input: #8e9ed4;
    }

`;