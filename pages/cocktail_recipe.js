import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BulletList from "../components/bulletList";

export default function CocktailInfo({route, randomCocktail}) {
    const cocktail = randomCocktail ? randomCocktail : route.params.cocktail
    const ingredientsCocktail = () => {
        let ingredients = []
        for (const [key, value] of Object.entries(cocktail)) {
            if (key.startsWith('strIngredient') && value !== null) {
                ingredients.push(value);
            }
        }
        return ingredients
    }
    const measureIngredients = () => {
        const measures = []
        for (const [key, value] of Object.entries(cocktail)) {
            if (key.startsWith('strMeasure') && value !== null) {
                measures.push(value);
            }
        }
        return measures
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Cocktail {cocktail && cocktail.strDrink}</Text>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: cocktail.strDrinkThumb}}
                    />
                    <View style={styles.viewContainer}>
                        <Text style={styles.subTitle}>Instructions pour réaliser le {cocktail && cocktail.strDrink}</Text>
                        <Text style={styles.description}>
                            {cocktail && cocktail.strInstructions}
                        </Text>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.subTitle}>Ingrédients pour réaliser le {cocktail && cocktail.strDrink}</Text>
                        <BulletList ingredients={ingredientsCocktail()} measures={measureIngredients()} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 16
    },
    viewContainer: {
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 16
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    img: {
        height: 225,
        width: 325,
        borderRadius: 15
    }
});