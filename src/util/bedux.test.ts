// // "Bedux és mukodok"
// enum Types {
//     TO_TRUE = 'TO_TRUE',
//     HELLO = 'HELLO'
// }
//
// interface IAction {
//     type: Types,
//     payload: string
// }
//
// interface IState {
//     a: string,
//     b: boolean
// }
//
// type IReducer = (state: IState, action: IAction) => (IState);
//
// type IReducers = Map<string, IReducer>;
//
// let hiddenState: IState;
//
// const reducers: Map<string, IReducer> = new Map<string, IReducer>();
//
// function dispatch(action: IAction) {
//     let reducer: IReducer | undefined = reducers.get(action.type);
//
//     if (reducer !== undefined) {
//         reducer((hiddenState as IState), (action as IAction));
//     } else {
//         throw `Missing reducer: ${action.type}`
//     }
// }
//
// function addReducers(o: IReducers) {
//     o.forEach((value, key) => reducers.set(key, value));
// }
//
// function helloReducer(state: IState = {b: false, a: 'nincs'}, action: IAction) {
//     if (action.type === Types.TO_TRUE) {
//         state.b = true;
//     } else if (action.type === Types.HELLO) {
//         state.a = 'Hello'
//     }
// }
//
// it('asd', function () {
//     let tmp = new Map();
//     tmp.set(Types.HELLO, helloReducer);
//
//     addReducers(tmp);
//
//     dispatch({
//         type: Types.HELLO,
//         payload: 'test'
//     })
//
// });