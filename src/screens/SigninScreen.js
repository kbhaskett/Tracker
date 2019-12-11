import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm headerText='Sign in To Tracker' errorMessage={state.errorMessage} submitButtonText='Sign in' onSubmit={signin} />
        <NavLink text='Dont have an account? Go to Sign up Screen' routeName='Signup'/>
    </View>
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;