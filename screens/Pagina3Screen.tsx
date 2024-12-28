import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FORMULARIO() {
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)

    useEffect(() => {
        if (edad < 0) {
            setedad(0)
        }
    }, [edad])


    function usuario() {
        Alert.alert('Mensaje' + nombre + 'Tiene una edad de ' + edad)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>FORMULARIO</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingresar Nombre'
                onChangeText={(texto) => setnombre(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar Edad'
                keyboardType='numeric'
                onChangeText={(texto) => setedad(+texto)}
            />
            <Button title='aceptar' onPress={() => usuario()} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#666',
        fontSize: 25,
        height: 45,
        width: '85%',
        margin: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

})