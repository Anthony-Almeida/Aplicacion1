import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina4Screen() {
    const [kelvin, setKelvin] = useState(0);
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function convertTemperature() {

        setCelsius(kelvin - 273.15)
        setFahrenheit(((kelvin - 273.15) * 1.8) + 32)
        Alert.alert('La solucion', 'en °C es' + celsius + ' en °F es' + fahrenheit)


    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>CONVERTIDOR</Text>
            <TextInput
                placeholder="Introduce un valor en Kelvin"
            />
            <Button title="Convertir" onPress={() => convertTemperature()} />
            {celsius !== null && fahrenheit !== null && (
                <View style={styles.results}>
                    <Text style={styles.resultText}>Celsius: {celsius}°C</Text>
                    <Text style={styles.resultText}>Fahrenheit: {fahrenheit}°F</Text>
                </View>
            )}
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
    },
    results: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        marginVertical: 5,
    },
})