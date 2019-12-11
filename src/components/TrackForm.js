import React from 'react';
import {Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

const TrackForm = () => {
    return <>
        <Spacer>
            <Input placeholder='Enter track name...' />
        </Spacer>
        <Spacer>
            <Button title='Start Recording' />
        </Spacer>
    </>;
};

export default TrackForm;