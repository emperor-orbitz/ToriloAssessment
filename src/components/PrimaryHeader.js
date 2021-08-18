import React from "react"

import { View, HStack, Box, } from 'native-base';

import IconFeather from 'react-native-vector-icons/Feather';

export default function PrimaryHeader ({ data, navigation }) {
    
    return (
        <>

            <View height={70} width={"100%"}>
               <HStack px={5}>
                   <Box style={{width:"10%"}}>
                       <IconFeather style={{lineHeight:70}} name="menu" size={24}/>
                   </Box>
                   <Box style={{width:"80%"}}></Box>
                   <Box style={{width:"10%"}}>
                        <IconFeather  style={{lineHeight:70}} name="user" size={24}/>
                   </Box>
               </HStack>
            </View>

        
        </>
    )
}