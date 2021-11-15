import { ISystemState } from './main/system/type'
import { ILoginInstance } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginInstance
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
