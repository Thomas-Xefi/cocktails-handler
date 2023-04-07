import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Card = ({cocktail, navigation}) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Cocktail recipe', {
                    cocktail: cocktail
                })
            }}>
                <Text style={styles.title}>
                    {cocktail && cocktail.strDrink}
                </Text>
                <View style={styles.content}>
                    <Image
                        style={styles.img}
                        source={{uri: cocktail.strDrinkThumb}}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        height: 75,
        width: 75
    }
});

export default Card;