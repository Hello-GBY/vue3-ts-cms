// 定义表单类型
type IFromType = 'input' | 'password' | 'select' | 'datepicker'

// from 传递过来的参数泛型
export interface IFormItem {
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] // 针对select
  otherOptions?: any // 对于需要一些特殊的属性 例如otherOptions组件
}

// 定义组件传参接口
export interface IFormProps {
  fromItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
}
