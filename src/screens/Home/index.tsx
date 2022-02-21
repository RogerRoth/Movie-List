import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { api, params } from '@services/api';

import { Container, Header, TitleText, MoviesSelectByHeader, AppName } from "./styles";
import { Search } from "@components/Search";
import { Button } from "@components/Button";
import { MovieCard, MovieProps } from "@components/MovieCard";

export function Home() {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [filter, setFilter] = useState('popular');
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState('');

    const [search, setSearch] = useState('');

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    async function fetchMovies(value: string, filtered: boolean) {
        const formattedValue = value.toLocaleLowerCase().trim();

        if (formattedValue !== '' && filtered === false){
            
            setSelected('');
            await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${params["api-key"]}&language=${params.language}&query=${formattedValue}&page=${params.p}`).then( response => {
                const data = response.data.results.map( movie => {
                    return {
                        movie,
                    }
                }) as MovieProps[];
                
                setMovies(data);
                setSearch('');
            })

        } else {
            setLoading(filter);
            setSelected(filter);
            await api.get(`https://api.themoviedb.org/3/movie/${filter}?api_key=${params["api-key"]}&language=${params.language}&page=${params.p}`).then( response => {
                const data = response.data.results.map( movie => {
                    return {
                        movie,
                    }
                }) as MovieProps[];
                setSelected(filter);
                setMovies(data);
            })
            setLoading('');
        }
    }

    function handleSearch(){
        fetchMovies(search, false);
    }
    
    function handleOpen(movie: MovieProps) {
        navigation.navigate('movie', movie);
    }

    function handleSearchClear(){
        setSearch('');
    }

    useEffect(() => {
        fetchMovies(filter, true);
    }, [filter])

    return (
        <Container>
            <Header>
                <MaterialIcons name="local-movies" color={COLORS.TITLE} size={28} />
                <AppName>Movie List</AppName>                
            </Header>

            <Search 
                onChangeText={setSearch}
                value={search}
                onSearch={handleSearch} 
                onClear={handleSearchClear}
            />

            <MoviesSelectByHeader>
                <Button 
                    title="Popular" 
                    isLoading={loading === 'popular' ? true : false} 
                    onPress={()=> {setFilter('popular')}} 
                    type={selected === 'popular' ? 'secondary' : 'primary'}/>
                <Button 
                    title="Top Rated" 
                    isLoading={loading === 'top_rated' ? true : false} 
                    onPress={()=> {setFilter('top_rated')}} 
                    type={selected === 'top_rated' ? 'secondary' : 'primary'} />
                <Button 
                    title="Upcoming" 
                    isLoading={loading === 'upcoming' ? true : false}  
                    onPress={()=> {setFilter('upcoming')}} 
                    type={selected === 'upcoming' ? 'secondary' : 'primary'}/>
            </MoviesSelectByHeader>

            <FlatList 
                data={movies}
                keyExtractor={item => item.movie.id.toString()}
                renderItem={({ item }) => 
                    (<MovieCard 
                        data={item} 
                        onPress={() => handleOpen(item)}
                    />)
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 125,
                    marginHorizontal: 24,
                }}
            />

            
        </Container>
    )
}