import React, { ReactElement } from "react"
import { TouchableOpacity, StyleSheet, Image } from "react-native"

export const Banner = (props: { url: string }) => {
    return (
        <TouchableOpacity
            style={styles.banner}
        >
            <Image
                style={styles.image}
                source={{ uri: props.url }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: 'gray',
    },
    image: {
        height: 200,
        width: '100%',
    }
});

export default Banner