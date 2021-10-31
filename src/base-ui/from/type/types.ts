// 定义表单类型
type IFromType = 'input' | 'password' | 'select' | 'datepicker'

// from 传递过来的参数泛型
export interface IFormItem {
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
}
