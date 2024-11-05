import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ScrollUsers = () => {
  return (
    <View style={styles.scrollusers}>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
      <Image source={require('../assets/images/pic1.png')} style={styles.user}/>
    </View>
  )
}

export default ScrollUsers

const styles = StyleSheet.create({
    user:{
        width: 50,
        height: 50,
        borderRadius: 100,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: "#E03368",
    },
    scrollusers:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})