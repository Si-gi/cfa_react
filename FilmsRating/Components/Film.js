import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Rating from "react-rating";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Film extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { film } = this.props.route.params;
        return(

                <View style={styles.row}>
                    <Image source={{uri : film.imageUrl}}
                           style={styles.cover}/>
                    <Text style={styles.title}>
                        {film.title}
                    </Text>
                    <Text>
                        {film.description}
                    </Text>
                    <Rating
                        readonly
                            initialRating={film.note}
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            fractions={2}
                            onChange={this.handleInputChange}
                    />
                </View>

        )
    }
}

const styles = StyleSheet.create({
    row: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,
        margin: 10,
        width: width/2-20,
        alignItems: 'center',
    },
    cover: {
        width: 130,
        height: 190,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        textAlign: 'center'
    }
});