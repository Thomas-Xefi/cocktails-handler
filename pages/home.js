import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import Card from "../components/card";


const GRID_SIZE = 3;
export default function Home({navigation}) {
    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {
        (async () => {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(data => setCocktails(data.drinks))
        })();
    }, []);
    const rows = Math.ceil(cocktails.length / GRID_SIZE);
    const grids = Array.from(Array(rows), (_, i) => cocktails.slice(i * GRID_SIZE, i * GRID_SIZE + GRID_SIZE));
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    grids.map((grid, i) => (
                        <View style={styles.row} key={i}>
                            {
                                grid.map(cocktail => (
                                    <Card cocktail={cocktail} key={cocktail.drinkId} navigation={navigation}/>
                                ))
                            }
                        </View>
                    ))
                }
            </ScrollView>
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