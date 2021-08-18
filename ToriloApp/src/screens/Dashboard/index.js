import React, { useState, useEffect } from "react"

import { View, Text, HStack, Box, } from 'native-base';
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon } from 'native-base';
import PrimaryHeader from "../../components/PrimaryHeader";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Slider from "./Slider";
import axios from "axios";
import List from "./Jobs/list";


const user = {
    firstName: 'Robert',
    lastName: 'James',
    email: 'robert@gmail.com',
    gender: 'male'
}


export default function Dashboard({ navigation }) {

    const [slider_data, setSliderData] = useState([]);
    const [recent_data, setRecentData] = useState([]);


    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://remotive.io/api/remote-jobs?category=software-dev&limit=20', {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            setSliderData(data.jobs.slice(0, 5));
            setRecentData(data.jobs.slice(5));

        } catch (error) {
            Alert.alert('Oops!', 'Something went wrong. Please check your network');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <View backgroundColor="gray.100" style={{ height: '100%' }}>
                <PrimaryHeader />
                <ScrollView >
                    <View py={3} px={5}>
                        <Box my={5}>
                            <Text style={styles.user}>Hi {user.firstName},</Text>
                            <Text style={styles.greeting}>Find Your Dream Job</Text>
                        </Box>

                        {/* Search bar Starts Here */}
                        <Box my={5} >
                            <HStack>
                                <Box py={1} px={2} style={styles.searchBox}>
                                    <Input
                                        style={{ fontFamily: 'Ubuntu-Regular' }}
                                        placeholder="Search for Job Title" // mx={4}
                                        borderWidth={0}
                                        size="xs"
                                        InputLeftElement={
                                            <Icon
                                                as={<MaterialIcons name="search" />}
                                                size="sm"
                                                m={2}
                                                style={{ backgroundColor: 'white' }}
                                            />
                                        }
                                    />
                                </Box>
                                <Box width={"5%"} />
                                <TouchableOpacity style={styles.searchButton} onPress={() => alert('Hi')}>
                                    <MaterialCommunityIcons name="tune-vertical" style={styles.searchButtonIcon} />
                                </TouchableOpacity>

                            </HStack>

                        </Box>


                        {/* Carousel Starts Here */}

                        <Box mt={5} minHeight={250} >
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: 'black', fontSize: 14 }}>Popular Companies</Text>
                            <Slider data={slider_data} navigation={navigation} />
                        </Box>

                        <Box minHeight={300}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: 'black', fontSize: 14 }}>Recent Jobs</Text>
                            <List data={recent_data} navigation={navigation} />
                        </Box>
                    </View>

                </ScrollView>


            </View>


        </>
    )
}


const styles = StyleSheet.create({
    user: { fontSize: 25, color: 'black', fontFamily: 'Ubuntu-Regular' },
    greeting: { fontSize: 25, color: 'black', fontFamily: 'Ubuntu-Regular' },
    searchBox: { width: "75%", borderRadius: 10, backgroundColor: 'white' },
    searchButtonIcon: { textAlign: 'center', color: 'white', lineHeight: 60, fontSize: 30 },
    searchButton: { backgroundColor: 'black', borderRadius: 10, paddingHorizontal: 20 }
})