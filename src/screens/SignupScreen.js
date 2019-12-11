import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm headerText='Sign up For Tracker' errorMessage={state.errorMessage} submitButtonText='Sign up' onSubmit={signup} />
        <NavLink text='Already have an account? Go to Sign in Screen' routeName='Signin'/>
    </View>
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;