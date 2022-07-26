import React, { ReactElement } from "react"
import { TouchableOpacity, StyleSheet, TextInput } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export const SearchBar = () => {
    return (
        <TouchableOpacity
            style={styles.searchBar}
        >
            <MaterialIcons size={30} style={styles.icon} name="search" />
            <TextInput placeholder="Search"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'silver',
        borderRadius: 5,
        flexDirection: 'row',
        width: 250,
        minHeight: 20,
        padding: 5,
        margin: 5,
        left: '100%'
    },
    icon: {
        alignSelf: 'flex-start',
        
    }
});

export default SearchBar