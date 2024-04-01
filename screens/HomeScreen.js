import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FIREBASE_AUTH } from '../config/firebase'
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
    const navigation =useNavigation();

    const auth = FIREBASE_AUTH

    console.log("auth in home",auth,"------------")

    const handleSignOut =()=>{
        auth
            .signOut()
            .then(()=>{
                navigation.navigate("Login");
            })
            .catch(error=>console.log(error));
    }
  return (
    <View className="h-full w-full justify-center p-2">
        <Text className="text-center text-xl font-bold">Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mt-3" onPress={()=>handleSignOut()}>
            <Text className="text-xl font-bold text-white text-center">
                Signout
            </Text>
        </TouchableOpacity>
    </View>
  )
}