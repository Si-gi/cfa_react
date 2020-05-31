import React from 'react';
import Constants from 'expo-constants'
import moment from "moment"
import { StyleSheet, Text, View, Button  } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            session: 25,
            timerM: 25,
            playing: false,
            timerS: 0,
            i: 0,
        }
    }
    PlayChange = () => {
        let playing = this.state.playing !== true ? false : true;
        this.setState({
            playing: playing
        })
    }

    breakTimeUp = () => {
        this.setState({
            break: this.state.break +1
        })
    }
    breakTimeDown = () =>{
        if(this.state.break === 0) {
            return
        }
        this.setState({
            break: this.state.break -1
        })
    }

    sessionUp= () =>{
        this.setState({
            session: this.state.session +1
        })
    }
    sessionDown = () =>{
        if(this.state.session === 0) {
            return
        }
        this.setState({
            session: this.state.session -1
        })
    }

    StartTimer = () => {
        this.setState({
            playing: true
        })
        this.TimerStarting();
    }

    PauseTimer = () => {
        this.props.PlayChange(false);
        clearInterval(this.state.i);
    }

    ResetTimer = () => {
        this.setState({
            session: 25,
            timerM: 25,
            break: 5
        })
    }
    TimerStarting = () => {
        let i = setInterval(() => {
            switch(this.state.timerS) {
                case 0:
                    if (this.state.timerM === 0) {
                        if (this.state.isSession) {
                            // start break timer
                            this.setState({
                                isSession: false,
                                timerM: min
                            });
                        } else {
                            // start session timer
                            this.setState({
                                isSession: true,
                                timerM: min
                            })
                        }
                    } else {

                        this.setState({
                            timerS: 59,
                            timerM: min
                        })
                    }
                    break;
                default:
                    this.setState({
                        timerS: this.state.timerS - 1
                    });
                    break;
            }
        }, 1000);

        this.setState({
            i: i
        });
    }
  render() {
    return (
        <View>
            <View>
                <Text>Session time</Text>
            </View>
            <View>
                <Button onPress={this.sessionUp} title="More"></Button>
                <Text>{this.state.session}</Text>
                <Button onPress={this.sessionDown} title="Less"></Button>
            </View>
            <Text>Break time</Text>
            <View>
                <Button onPress = {this.breakTimeUp} title="More"></Button>
                <Text>{this.state.break}</Text>
                <Button onPress = {this.breakTimeDown} title="Less"/>
            </View>
            <View>
                <Text>{this.state.playing === true ? 'Session' : 'Break'}</Text>
                <View style={styles.timer}>
                    <Text style={[this.state.timerS <= 20 && this.state.timerM === 0 ? styles.colorTextRed : styles.colorTextBlack]}>{this.state.timerM} : </Text>
                    <Text style={[this.state.timerS <= 20 && this.state.timerM === 0 ? styles.colorTextRed : styles.colorTextBlack]}>
                        {this.state.timerS === 0 ? '00' : this.state.timerS < 10 ? '0' + this.state.timerS : this.state.timerS}</Text>
                </View>
                <View style={styles.timerButton}>
                    <Button onPress={this.StartTimer} title="Play"></Button>
                    <Button onPress={this.PauseTimer} title="Pause"></Button>
                    <Button onPress={this.ResetTimer} title="Reset"></Button>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#C62828",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  resetButton: {
    backgroundColor: "#2A2A2A",
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  titleContainer: {
    flex: 0.2,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  countContainer: {
    alignSelf: "stretch",
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECEFF1"
  },
  countTitle: {
    fontSize: 40,
    marginTop: 30,
    fontWeight: "bold"
  },
  count: {
    fontSize: 100,
    marginBottom: 40
  },
    timer: {
        fontSize: 30,
        margin: 50,
        alignItems: 'center',
        flexDirection: 'row'
    },
});
