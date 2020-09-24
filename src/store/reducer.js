
//var myDate = new Date().toDateString();


const initialState = {
    
    selection: "",
    adress: "",
    comment: "",
    amount: "",
    date: new Date(new Date().toDateString()),
    zipcode:"",
    userId:null
    
}



const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'UPDATE_SELECTION':
            newState.selection = action.text;
            break;
        case 'UPDATE_ADRESS':
            newState.adress = action.text;
            break;
        case 'UPDATE_COMMENT':
            newState.comment = action.text;
            break;
        case 'UPDATE_AMOUNT':
            newState.amount = action.text;
            break;
        case 'UPDATE_DATE':
            newState.date = action.text;
            break;
        case 'UPDATE_USERID':
            newState.userId = action.text;
            break;
        case 'UPDATE_ZIPCODE':
            newState.zipcode = action.text;
            break;

        
    }
    return newState;
};

export default reducer;



