/**
 * Created by michaelbotes on 2016/12/24.
 */
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Heading = () => (
    <View style={styles.header} refreshing={false}>
        <Text style={styles.headerText}>
            Todos
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175, 47,47, 0.25)',
        fontWeight: '100'
    }
});

export default Heading