// based on https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/redux-promise 
// 5262c27b6ec4786e543c32ac83ef0b5b687987b5

declare namespace Redux {
  type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

  interface Dispatch<S> {
    <R>(asyncAction: PromiseAction<S>): R;
  }
}

declare namespace ReduxPromise {
  export interface Promise extends Redux.Middleware {}
}

declare module "redux-promise" {
  var promiseMiddleware: ReduxPromise.Promise;
  export default promiseMiddleware;
}