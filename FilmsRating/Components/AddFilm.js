import React from 'react';
import {StyleSheet, View, Text, TextInput, Input, ALERT} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Logs } from 'expo';
import { connect } from 'react-redux';
import '../assets/style.css';

import Rating from 'react-rating';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class AddFilm extends React.Component {

    state = {
        title : "",
        imageUrl: "",
        note: 0,
        description: ""
    }

    addFilm(){
        if(this.state.title != "" && this.state.imageUrl != "" && this.state.note != ""){
            const action = {type: "ADD_FILM", value: {title: this.state.title, imageUrl: this.state.imageUrl, note: this.state.note, description: this.state.description}}
            this.props.dispatch(action)
            this.setState({title: "", imageUrl: "", note: "", description: ""})
        }
    }

    _setNote(value){
        this.setState({note: value});
    }


    handleInputChange = (event) => {
        // your logic

        this.setState({note: event});
    };

    changeRating = (newRating, name) => {
    this.setState({note: newRating});
    };

    render(){
        return(
            <View style={styles.row}>
                <Text style={styles.title}>Ajouter un film</Text>
                <TextInput placeholder="Titre" value={this.state.title} onChangeText={(text) => this.setState({title: text})} placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Description" value={this.state.description} onChangeText={(text) => this.setState({description: text})} placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Url de l'affiche" value={this.state.imageUrl} onChangeText={(text) => this.setState({imageUrl: text})} placeholderTextColor="white" style={styles.input}/>
                <Text style={styles.noteLabel}>Note</Text>


                <Rating style={styles.ratings}
                    initialRating={this.state.note}
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                    onChange={this.handleInputChange}
                />
                <TouchableOpacity style={styles.button} onPress={() => {this.addFilm()}}>
                    <Text style={{textAlign: "center"}}>Ajouter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        padding: 8,
        marginTop: 20,
        paddingLeft: 15,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        backgroundColor: "#66ff66",
        width: 100,
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: "center"
    },
    noteLabel: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 17,
        fontWeight: "bold"
    },
    ratings:{
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }

});

function mapStateToProps(state){
    return {films : state.films}
}

export default connect(mapStateToProps)(AddFilm)