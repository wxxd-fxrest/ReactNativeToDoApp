import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Empty = () => {
    return (
        <View style={styles.block}>
            <Image style={styles.image}
                resizeMode="contain"
                source={require('../assets/images/young_and_happy.png')} />
            <Text style={styles.description}> 야호, 할 일 없음 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e',
    },
    image: {
        width: 240, 
        height: 179, 
        marginBottom: 16,
    }
});

export default Empty;