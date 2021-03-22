import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps216975Navigator from '../features/Maps216975/navigator';
import Additem216974Navigator from '../features/Additem216974/navigator';
import Maps216970Navigator from '../features/Maps216970/navigator';
import UserProfile216966Navigator from '../features/UserProfile216966/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps216975: { screen: Maps216975Navigator },
Additem216974: { screen: Additem216974Navigator },
Maps216970: { screen: Maps216970Navigator },
UserProfile216966: { screen: UserProfile216966Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
