import React, { Component } from "react";
import { Text, StyleSheet, View, ImageCropData } from "react-native";
import { FadeInDown } from "react-native-reanimated";
import { Drink } from "./cocktaildbapi.service";


export default class Cocktail {
    id: number;
    name: string;
    image: string;
    instructions: string;

    constructor(drink: Drink){
        this.id = drink.idDrink;
        this.name = drink.strDrink;
        this.image = drink.strDrinkThumb;
        this.instructions = drink.strInstructions;
    }
}

