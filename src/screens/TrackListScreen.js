import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return <View>
        <Text style={{fontSize: 48}} >The TrackList Screen </Text>
        <Button title='Track Detail' onPress={() => navigation.navigate('TrackDetail')} ></Button>
    </View>
};

const styles = StyleSheet.create({});

export default TrackListScreen;