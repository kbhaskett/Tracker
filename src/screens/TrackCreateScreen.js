import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import '../helper/_mockLocation';

const TrackCreateScreen = ({isFocused}) => {
    const {state: { recording }, addLocation} = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    return <SafeAreaView forceInset={{top: 'always', horizontal: 'always'}} >
        <Text h2>Create a Track</Text>
        <Map />
        {err ? <Text>You must enable location services to use this feature.</Text> : null}
        <TrackForm />
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);