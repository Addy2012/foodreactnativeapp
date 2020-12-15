import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import SearchBar from '../Components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View style={styles.basicLayout}>
            <SearchBar onTermSubmit={newTerm => setTerm(newTerm)} term={term} onTermChange={newTerm => setTerm(newTerm)}/>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    basicLayout:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%',
    }
})

export default SearchScreen