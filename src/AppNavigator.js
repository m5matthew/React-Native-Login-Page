import { createStackNavigator } from 'react-navigation';
import StudySmart from './Components/StudySmart';
import LoginPage from './Components/LoginPage';
import EnterMajor from './Components/EnterMajor';
import EnterYear from './Components/EnterYear';
import EnterUser from './Components/EnterUser';

const AppNavigator = createStackNavigator({
    StudySmart: { screen: StudySmart, navigationOptions: {header: null}},
    LoginPage: {screen: LoginPage},
    EnterMajor: { screen: EnterMajor },
    EnterYear: { screen: EnterYear },
    EnterUser: { screen: EnterUser },
});

export default AppNavigator;
