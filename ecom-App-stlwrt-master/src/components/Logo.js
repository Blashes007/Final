import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image style={{width:100, height: 100}}
					source={require('../../assests/Logo.png')}/>

				<Text style={styles.logoText}>Welcome</Text>
			</View>		
			)


	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginTop: 30,
},

	logoText : {
		marginVertical:15,
		fontSize:22,
		color:'rgba(255, 255, 255, 0.7)'
	}

});