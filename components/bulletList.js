import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';

const BulletList = ({ingredients, measures}) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {
                    ingredients.map((ingredient, index) => {
                        return <View style={styles.card}>
                            <Text style={styles.title}>{ingredient}</Text>
                            <Text style={styles.title}>{measures[index]}</Text>
                            <Image
                                style={styles.img}
                                source={{uri: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}}
                            />
                        </View>
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
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
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: "center"
    },
    img: {
        height: 75,
        width: 75
    }
});

export default BulletList;