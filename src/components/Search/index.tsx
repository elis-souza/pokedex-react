import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./styles";

export function Search(props : any) {
    const [search, setSearch] = useState('');

    const {onSearch} = props;

    const tySearch = (inputRes : any) => {
        setSearch(inputRes.target.value)
    };

    useEffect(() => {
        onSearch(search);
    }, [search]);

    return (
            <Container>
                <div className="containerSearch">
                    <input onChange={tySearch} placeholder="Buscar Pokemon" />
                </div>
            </Container>
    )
}