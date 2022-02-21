import React from "react";
import { useTheme } from "styled-components/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { MovieProps } from '@components/MovieCard'
import { KeyboardAvoidingView, ScrollView } from "react-native";

import { 
    Container, 
    BackDropImage, 
    InformationContainer, 
    TitleText, 
    Description, 
    AditionalDescription,
    ImagePoster,
} from "./styles";


export function Movie(){
    const {COLORS} = useTheme();
    const route = useRoute();
    const { movie } = route.params as MovieProps;

    const [year, month, date] = movie.release_date.split('-');
    const formatedDate = `${date}/${month}/${year}`

    return(
        
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>

                <BackDropImage resizeMode="cover" blurRadius={1} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} />
        
                <ImagePoster source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />

                <InformationContainer>
                    <TitleText>
                        {movie.title}
                    </TitleText>

                    <AditionalDescription>
                    <Feather name="calendar" size={23} color={COLORS.SHAPE} />
                        {"  "+formatedDate+"    "}
                        <Feather name="thumbs-up" size={23} color={COLORS.SHAPE}/>
                        {"  "+movie.vote_average+"%    "}
                        <MaterialIcons name="language" size={23} color={COLORS.SHAPE}/>
                        {"  "+movie.original_language.toLocaleUpperCase()}

                    </AditionalDescription>

                    <Description>
                        {movie.overview}
                    </Description>
                </InformationContainer>
            </ScrollView>
        </Container>
    )
}