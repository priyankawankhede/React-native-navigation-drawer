import React from 'react';
import { View,Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';

export default class Screen extends React.Component
{
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={styles.button} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>

                    <View style={styles.text1}>
                        <Text style={styles.text}>{this.props.name}Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create (
    {
        container :{
            flex:1,
            backgroundColor:"#FFF"
        },

        text1:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },

        text :{
            color :"#161924",
            fontSize:20,
            fontWeight:"500"
        },

        button:{
            padding:20,
            alignItems:"flex-end",
            margin:16
        }

    }
)
 