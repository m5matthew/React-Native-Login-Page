import { createStackNavigator } from 'react-navigation';
import StudySmart from './Components/StudySmart';
import LoginPage from './Components/LoginPage';
import EnterName from './Components/EnterName';
import EnterMajor from './Components/EnterMajor';
import EnterYear from './Components/EnterYear';
import EnterUser from './Components/EnterUser';
import EnterPass from './Components/EnterPass';

const AppNavigator = createStackNavigator({
    StudySmart: { screen: StudySmart, navigationOptions: {header: null}},
    LoginPage: {screen: LoginPage},
    EnterName: { screen: EnterName },
    EnterMajor: { screen: EnterMajor },
    EnterYear: { screen: EnterYear },
    EnterUser: { screen: EnterUser },
    EnterPass: { screen: EnterPass },
});

export default AppNavigator;
