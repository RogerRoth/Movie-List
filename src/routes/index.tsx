import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UseStackRoutes } from './user.stack.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <UseStackRoutes />
        </NavigationContainer>
    )
}