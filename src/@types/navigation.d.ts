import { MovieProps } from '@components/MovieCard'

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            movie: MovieProps;
        }
    }
}