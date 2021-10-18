import { ILoginInstance } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginInstance
}

export type IStoreType = IRootState & IRootWithModule
