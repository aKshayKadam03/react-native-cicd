import React from 'react'
import {SafeAreaView, StyleSheet, Text, Button, TextInput } from 'react-native'

function Auth() {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
             <TextInput
                style={styles.input}
                placeholder="Pin"
                keyboardType='numeric'
            />
            <Button
                style={styles.button}
                title="Login"
            />
        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {margin: 20},
    input:{ marginVertical: 10},
    button: {backgroundColor: "blue"}
})