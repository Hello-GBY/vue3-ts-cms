// 定义表单类型
type IFromType = 'input' | 'password' | 'select' | 'datepicker'
interface ISelectOption {
  label: string
  value: any
}
// from 传递过来的参数泛型
export interface IFormItem {
  field: string
  type: IFromType
  label: string
  placeHolder?: string
  rules?: any[]
  options?: ISelectOption[]
  otherOption?: any
  defaultValue?: any
  isHidden?: boolean
  otherOptions?: any // 对于需要一些特殊的属性 例如otherOptions组件
}

// 定义组件传参接口
export interface IFormProps {
  title?: string
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
