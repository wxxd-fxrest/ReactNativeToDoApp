import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DateHead = ({date}) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`

    // const {top} = useSafeAreaInsets();

    return (
        <>
            <View style={[styles.StatusBarPlaceholder]} />
            <StatusBar backgroundColor="#26a69a" style="auto" />
            <View style={styles.block}>
                <Text style={styles.dateText}> {formatted} </Text>
            </View>
        </>
    );
};



const styles = StyleSheet.create({
    StatusBarPlaceholder: {
        backgroundColor: '#26a69a'
    },  
    block: {
        padding: 16,
        backgroundColor: '#26a69a',
    },
    dateText: {
        fontSize: 24, 
        color: 'white',
    },
});

export default DateHead; 

