/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


export interface IListAction {
  type: string;
  operation: string;
  model: string;
  variables?: object;
}

export interface IList {
  action: IListAction;
  style?: string;
}

export interface IState {
  user: object | null;
  loading: boolean;
}

export interface IDispatchAction {
  dispatchAction: Function;
}

export interface IAuthActionData {
  type: string;
  payload?: object;
}

export interface IAuthAction {
  action: Function;
}

export interface IApiActionData {
  type: string;
  operation: string;
  model: string;
  variables?: object;
}

export interface IApiAction {
  action: Function;
}

export interface IAppContext {
  authContext?: IAuthAction;
  apiContext?: IApiAction;
  state: IState;
}

export interface IAction {
  type: string;
  payload?: object | any;
}