import React from "react"
import { useEffect } from "react";
import Dots from 'react-native-dots-pagination';
import { useState } from "react";

export default function Dot({ number }) {
    const [dotState, setDotState] = useState(0);
    useEffect(() => {
        setDotState(number);
    }, [number]);

    return (

        <Dots activeColor="white" passiveColor="grey" alignDotsOnXAxis={true} activeDotWidth={30} marginHorizontal={5} length={2} active={dotState} />

    )
}