import React from "react"

import { View } from 'native-base';
import { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import Dots from "./Dots";
import Item from "../../../screens/Welcome/Item";
import { useEffect } from "react";


const slides = [
    {
        key: 1,
        title: `Find A Perfect\nJob Match`,
        text: `One place with the best Job Companies in Tech.{"\n"}Apply to all of them with a single profile and get in touch with hiring managers directly`,
        backgroundColor: '#59b2ab',
        bg: require('../../assets/bg-new.png'),
        skip: true
    },
    {
        key: 2,
        title: `Find A Perfect\nJob Match`,
        text: `One place with the best Job Companies in Tech.{"\n"}Apply to all of them with a single profile and get in touch with hiring managers directly`,
        backgroundColor: '#59b2ab',
        bg: require('../../assets/bg-new.png'),
        skip: false
    },

];

export default function Welcome({ data, navigation }) {
    const [dotState, setDotState] = useState(0);

    _renderItem = ({ item }) => {
        return (<Item data={item} navigation={navigation} />)
    }

    function updateDot(number){
        setDotState(number);
    }
   
    return (
        <>
            <View style={{ backgroundColor: 'black', height: '100%' }}>
                <AppIntroSlider
                onSlideChange={(number)=>updateDot(number)}
                    renderPagination={(number) => {  }}
                    showSkipButton={false}
                    renderItem={_renderItem} data={slides}
                />

                <View style={{ position: 'absolute', bottom: 150, left: 10 }}>
                    <Dots number={dotState} />
                </View>
            </View>


        </>
    )
}