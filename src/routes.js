import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dashboard, Login } from './layouts';

export default createAppContainer(
    createSwitchNavigator({
        Dashboard,
        Login,
    }, {
        mode: 'modal'
    })
);