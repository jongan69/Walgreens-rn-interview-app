import React, { ReactElement } from "react"
import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native"

export const ProductCard = (props: {children : ReactElement[], url: string }) => {
    return (
      <ImageBackground 
      style={styles.imageBg}
      source={{uri :  props.url}}
      >
      <TouchableOpacity 
      style={styles.productDescription}
      >
        {props.children}
      </TouchableOpacity>
      </ImageBackground>
    )
  }

  const styles = StyleSheet.create({
    productDescription: {
      backgroundColor: 'white',
      //opacity: 0.9,
      borderRadius: 5,
      margin: 25,
      padding: 10,
      fontWeight: "bold",
      //textShadowColor: '#FFF',
    },
    imageBg: {
      //backgroundColor: 'gray',
      borderRadius: 5,
      margin: 25,
      paddingBottom: 10
    },
  });

  export default ProductCard