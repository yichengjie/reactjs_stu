var createStore = Redux.createStore;

var combineReducers = Redux.combineReducers;

var applyMiddleware = Redux.applyMiddleware;

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SETFILTER = 'SETFILTER';
const FILTER = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETE:'SHOW_COMPLETE',
  SHOW_ACTIVE:'SHOW_ACTIVE'
}

function addTodo(text){
  return {
    type:ADD_TODO,
    text
  };
}
function completeTodo(index){
  return {
    type:COMPLETE_TODO,
    index
  };
}
function selectFilter(filter){
    return {
        type:SETFILTER, 
        filter
    };
}
var initState = {
  filter:'SHOW_ALL',
  todos:[]
};


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, parseInt(action.index)),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(parseInt(action.index)+ 1)
      ];
    default:
      return state;
  }
}
function setFilter(state = FILTER.SHOW_ALL,action){
  switch(action.type){
    case SETFILTER:
      return action.filter;
    default:
      return state;
  }
}
var todoApp = combineReducers({
    filter:setFilter,
    todos:todos
});

var store = createStore(todoApp);

var unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

console.log('添加吃饭');
store.dispatch(addTodo('吃饭'));
console.log('添加睡觉');
store.dispatch(addTodo('睡觉'));
console.log('完成吃饭');
store.dispatch(completeTodo(0));
console.log('添加打豆豆');
store.dispatch(addTodo('打豆豆'));
console.log('完成睡觉');
store.dispatch(completeTodo(0));
console.log('setFilter');
store.dispatch(selectFilter(FILTER.SHOW_COMPLETE));
unsubscribe();