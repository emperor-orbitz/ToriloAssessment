import React  from "react"
import { View, Text, HStack, Box, } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SecondaryhHeader ({ data, navigation }) {
    
    return (
        <>

            <View height={90} width={"100%"}>
               {/* <Text> Primary HEADER</Text> */}
               <HStack px={5}>
                   <Box style={{width:"20%"}}>
                       <Ionicons onPress={()=>navigation.pop()} style={{fontSize:30, lineHeight:70,paddingHorizontal:10}} name="md-chevron-back-sharp" size={24}/>
                   </Box>
                   <Box style={{width:"60%"}}><Text style={{lineHeight:60, fontFamily:'Ubuntu-Bold', textAlign:'center'}} >Apple Inc.</Text></Box>
                   <Box style={{width:"10%"}}/>
               </HStack>
            </View>

        
        </>
    )
}