import {StackNavigator} from "react-navigation";
import Home from "../screens/home";
import {COLOR_PRIMARY, COLOR_SECONDARY} from "../styles/common";

export const MyStack = StackNavigator(
    {
        Home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: COLOR_PRIMARY,
            },
            headerTintColor: COLOR_SECONDARY,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
