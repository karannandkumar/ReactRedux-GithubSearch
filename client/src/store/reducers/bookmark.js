const bookmarkReducer = (bookmark = [], action) => {
switch (action.type){
    case 'ADDBOOKMARK':
        return bookmark.concat(action.payload);
    case 'REMOVEBOOKMARK':
        return bookmark.filter(word => word !== action.payload);
        default: 
        return bookmark ; 
}

};
export default bookmarkReducer