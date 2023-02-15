import { ISystemState } from './main/system/type'
import { ILoginInstance } from './login/types'
import { IAnalysis } from './main/analysis/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginInstance
  system: ISystemState
  analysis: IAnalysis
}

export type IStoreType = IRootState & IRootWithModule
