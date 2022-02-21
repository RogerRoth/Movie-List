import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Feather, MaterialIcons } from "@expo/vector-icons"

import { Container, Content, Image, Details, Name, Description, Line, Identification, AditionalDescription } from "./styles";

export type MovieProps = {
    movie: {
        adult: boolean,
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }
};

type Props = TouchableOpacityProps & {
    data: MovieProps;
}

export function MovieCard({ data, ...rest}: Props) {
    const {COLORS} = useTheme();
    const [year, month, date] = data.movie.release_date.split('-');

    const formatedDate = `${date}/${month}/${year}`

    return (
        <Container>
            <Content {...rest}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data.movie.poster_path}` }} />
                <Details>
                    <Identification>
                        <Name>{data.movie.title}</Name>
                        <Feather name="chevron-right" size={18} color={COLORS.SHAPE} />
                    </Identification>

                    <Description numberOfLines={5}>{data.movie.overview}</Description>
                    <AditionalDescription>
                        <Feather name="calendar" size={18} color={COLORS.SHAPE} />
                        {" "+formatedDate}
                    </AditionalDescription>
                    <AditionalDescription>
                        <Feather name="thumbs-up" size={18} color={COLORS.SHAPE}/>
                        {" "+data.movie.vote_average+"%  "}
                        <MaterialIcons name="language" size={18} color={COLORS.SHAPE}/>
                        {" "+data.movie.original_language.toLocaleUpperCase()}
                    </AditionalDescription>
                </Details>
            </Content>
            <Line />
        </Container>
    )
}