import React, {useContext} from 'react';
import {Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useTrack from '../hooks/useTrack';

const TrackForm = () => {
    const {state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useTrack()
    return <>
        <Spacer>
            <Input placeholder='Enter track name...' value={name} onChangeText={changeName} />
        </Spacer>
        <Spacer>
            {!recording ? <Button title='Start Recording' onPress={startRecording} /> : <Button title='Stop Recording' onPress={stopRecording} /> }
        </Spacer>
        <Spacer>
            {!recording && locations.length ? <Button title='Save Recording' onPress={() => {saveTrack();}} /> : null }
        </Spacer>
    </>;
};

export default TrackForm;