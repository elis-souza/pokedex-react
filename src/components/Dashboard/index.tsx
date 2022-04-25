import axios from 'axios';
import { useState } from 'react';
import { Container } from './styles';
import { Cards } from '../Cards'
import { Search } from '../Search';

interface pokeInterface {
    results: any;
    data: any;
    renderPokemon: any;
}

export function Dashboard() {
    const [pokemon, setPokemon] = useState<pokeInterface[]>([]);

    const getPokemon = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
        getDetails(response.data.results);
    }

    
    const getSearchPokemon = async (searchInfo : string) => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
        getDetails(response.data.results.filter((result : any) => result.name.includes(searchInfo)));
    }

    async function getDetails(infoPokemon : any) {
        const promises = infoPokemon.map( async (infoPokemon : any) => {
        return await axios.get(infoPokemon.url);
        })
        const results = await Promise.all(promises);
        setPokemon(results)
    }
    
    const onSearch = (searchInfo : string) => {
        if (searchInfo) {
            getSearchPokemon(searchInfo)
        } else {
            getPokemon();
        }
    }

    function formatId(num : string, size : number) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    function importAll(r : any) {
        let images : any = {};
        r.keys().map((item : any, index : any) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

    // onSearch('')

    return (
        <Container>
            <Search onSearch={onSearch}/>
            <div className="grid">
                {pokemon.map(renderPokemon => {
                    return (
                        <Cards
                            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(renderPokemon.data.id, 3)}.png`}
                            name={renderPokemon.data.name} 
                            id={renderPokemon.data.id}
                            imgTy={images[`${renderPokemon.data.types[0].type.name}-ico.svg`]}
                            type={renderPokemon.data.types[0].type.name}
                        />
                    )
                })}
        </div>
        </Container>
    );
}