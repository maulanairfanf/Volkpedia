import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback,useState} from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, NewProducts, SignIn } from './screens';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ActivityIndicator } from 'react-native';

const Stack = createNativeStackNavigator()

function LoadingScreen ()  {
  return (
    <ActivityIndicator />
  )
}

export default function App() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [state, dispatch] = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootReview = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])
  
  if (!fontsLoaded) {
    return null
  }


  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}


export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { authState, onLogout } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator>
           {isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen 
              name="Splash" 
              component={LoadingScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : !authState?.authenticated ? (
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <>
              <Stack.Screen 
                name='Bottom Navigation'
                component={BottomTabNavigation}
                options={{headerShown: false}}
                />
              <Stack.Screen 
                name='ProductList'
                component={NewProducts}
                options={{headerShown: false}}
                />
              <Stack.Screen 
                name='Cart'
                component={Cart}
                options={{headerShown: false}}
                />
              <Stack.Screen 
                name='ProductDetails'
                component={ProductDetails}
                options={{headerShown: false}}
                />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}