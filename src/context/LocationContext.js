import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'setCurrentLocation':
            return {...state, currentLocation: action.payload};
        case 'addLocation':
            return {...state, locations: [...state.locations, action.payload]};
        case 'startRecording':
            return {...state, recording: true};
        case 'stopRecording':
            return {...state, recording: false};
        case 'setTrackName':
            return {...state, recording: false};
        default:
            return state;
    };
};

const setTrackName = dispatch => (trackName) => {
    dispatch({type: 'setTrackName', payload: trackName});
};

const startRecording = dispatch => () => {
    dispatch({ type: 'startRecording' });
};

const stopRecording = dispatch => () => {
    dispatch({ type: 'stopRecording' });
};

const addLocation = dispatch => (location, recording) => {
    dispatch({type: 'setCurrentLocation', payload: location});
    if (recording)
        dispatch({type: 'addLocation', payload: location});
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {setTrackName, startRecording, stopRecording, addLocation},
    {recording: false, location: [], trackName: '', currentLocation: null}
);