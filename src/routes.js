import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home, Login } from './layouts';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
    }, {
        mode: 'modal'
    })
);