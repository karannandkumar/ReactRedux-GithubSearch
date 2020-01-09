const apiReducer = (api = [], action) => {
    switch (action.type){
        case 'APIADDED':
            return api.concat(action.payload);
     ;
            default: 
            return api ; 
    }
    
    };
    export default bookmarkReducer