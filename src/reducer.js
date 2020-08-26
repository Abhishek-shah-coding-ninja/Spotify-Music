export const initialState = {
    user: null,
    playlist: [],
    playing:false,
    item:null,

    token:"BQDP8-dUdgGr4GS78V2r3hN4vSJcoMMGCpFxvyAelVtZ2jdRk1GroDtyAGKUaOlO0iMr8FO4BpT2U0MtMBlPdw1BOqbFi1izSuJnVvW2gWwSsbAq7n6KA8ufdfg6fCzYEuiTYl9YaQSeQD_0E3oVX3m418N8Dsjrqd9pQUKto3jFRw0Ne9If"
};

const reducer = (state, action) => {
    console.log(action);


    // Action --> type, [payLoad]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };
        default:
            return state;
    }

}

export default reducer;