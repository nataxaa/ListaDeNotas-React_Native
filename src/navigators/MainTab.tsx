import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Image} from 'react-native'

const Tab = createBottomTabNavigator()

import TabAboutScreen from "../pages/TabAboutScreen"
import TabHomeScreen from "../pages/TabHomeScreen"

export default () => (
    <Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
            let ImgSource = null
            switch(route.name){
                case 'Home' :
                    ImgSource = require('../assets/home.png')
                break
                case 'About' :
                    ImgSource = require('../assets/about.png')
                break
            }
            return <Image source={ImgSource} style={{width: 30, height:30, }}/>
        },
        headerTransparent: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: '#EDECE9'
    })}
    
    >
        <Tab.Screen name="Home" component={TabHomeScreen}/>
        <Tab.Screen name="About" component={TabAboutScreen}/>
        
    </Tab.Navigator>
)