import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation'
import {Button} from 'react-native-elements';
import Spaceer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return <SafeAreaView forceInset={{top: 'always'}} >
        <Text style={{fontSize: 48}} >The Account Screen </Text>
        <Spaceer>
            <Button title='Sign out' onPress={signout} />
        </Spaceer>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default AccountScreen;