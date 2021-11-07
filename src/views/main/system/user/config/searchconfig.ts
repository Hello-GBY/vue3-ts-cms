import { IFormItem, IFormProps } from '@/base-ui/from/index'

const fromItems: IFormItem[] = [
  {
    label: '用户名',
    type: 'input',
    rules: [],
    placeholder: '请输入用户名',
    field: 'name'
  },
  {
    label: '密码',
    type: 'password',
    placeholder: '请输入密码',
    field: 'password'
  },
  {
    field: 'sport',
    label: '喜欢的运动',
    type: 'select',
    placeholder: '请选择创建时间',
    options: [
      {
        label: '篮球',
        value: '篮球'
      },
      {
        label: '足球',
        value: '足球'
      }
    ]
  },
  {
    field: 'createTime',
    label: '创建时间',
    type: 'datepicker',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]
const labelWidth = '100px'
const fromConfig: IFormProps = {
  fromItems,
  labelWidth
}
const fromData = {
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
}

export { fromConfig, fromData }
