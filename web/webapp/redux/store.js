sap.ui.define([
    'app/redux/reducer',
    'libs/redux/index',
    'libs/redux-logger/index'
], function (fnReducers) {
    var oStore = Redux.createStore(
        fnReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return oStore;
});