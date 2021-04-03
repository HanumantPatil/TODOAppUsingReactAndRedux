export var CREATE_TODO = "CREATE_TODO";
export var CreateTODO = function (text) { return ({
    type: CREATE_TODO,
    payload: { text: text },
}); };
export var REMOVE_TODO = "REMOVE_TODO";
export var RemoveTODO = function (text) { return ({
    type: REMOVE_TODO,
    payload: { text: text },
}); };
//# sourceMappingURL=Actions.js.map