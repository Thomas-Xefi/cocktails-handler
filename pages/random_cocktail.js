import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import CocktailInfo from "./cocktail_recipe";
import {useFocusEffect} from "@react-navigation/native";

export default function RandomCocktail({navigation}) {
    const [randomCocktail, setRandomCocktail] = useState([]);
    useFocusEffect(
        useCallback(() => {
            (async () => {
                fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                    .then(response => response.json())
                    .then(data => setRandomCocktail(data.drinks[0]))
            })();
        }, [])
    );
    return (
        <View style={styles.container}>
            <CocktailInfo randomCocktail={randomCocktail}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleFirstLetter: {
        fontSize: 20,
        color: '#000'
    }
});