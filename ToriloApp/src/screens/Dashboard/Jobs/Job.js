import React from "react"

import { View, Text, HStack, Box, } from 'native-base';
import { Image, ScrollView, StyleSheet, useWindowDimensions } from "react-native";

import SecondaryhHeader from "../../../components/SecondaryHeader";
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html'





export default function Job({ data, route, navigation }) {
    const { width } = useWindowDimensions();


    return (
        <>
            <ScrollView backgroundColor="gray.300" style={{ height: '100%' }}>

                <SecondaryhHeader navigation={navigation} />


                <View py={5} px={5} style={styles.jobBody} backgroundColor="white">

                    <Box width={"100%"} alignItems="center" py={5} alignContent="center">
                        <Image source={{ uri: route.params.data.company_logo_url }} style={styles.jobImage} height={80} width={80} />
                        <Text mt={4} textAlign="center" style={{ fontFamily: 'Ubuntu-Bold' }}>{route.params.data.title}</Text>
                        <Text py={1} textAlign="center" style={{ fontFamily: 'Ubuntu-Regular', fontSize: 12 }}>{route.params.data.salary}</Text>
                        <Text my={3} style={styles.jobType}>{route.params.data.job_type}</Text>

                    </Box>

                    <Box width={"100%"} alignItems="center" pb={5} alignContent="center">
                        <HStack style={{ borderRadius: 10 }} >

                            <Box py={5} px={5} backgroundColor="#FA5805" borderRadius={10}>
                                <Text style={{ color: 'white', fontSize: 13, fontFamily: 'Ubuntu-Regular' }}>Description</Text>
                            </Box>
                            <Box py={5} backgroundColor="white" px={5} borderRadius={10}>
                                <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Ubuntu-Regular' }}>Company</Text>
                            </Box>
                        </HStack>
                    </Box>


                    <RenderHTML
                        systemFonts={[...defaultSystemFonts, 'Ubuntu-Regular']}
                        baseStyle={{ fontFamily: 'Ubuntu-Regular', fontSize: 15, lineHeight: 20 }}
                        st
                        contentWidth={width}
                        source={{ html: `${route.params.data.description}` }}

                    />

                </View>


            </ScrollView>


        </>
    )
}


const styles = StyleSheet.create({
    jobBody: { borderTopRightRadius: 50, borderTopLeftRadius: 50 },
    jobImage: { marginRight: 15, borderRadius: 10, height: 80, width: 80 },
    jobType: { fontSize: 10, paddingHorizontal: 15, paddingVertical: 10, color: 'black', borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 5, fontFamily: 'Ubuntu-Regular' }
})