import { IFormItem, IFormProps } from '@/base-ui/from/index'

const formItems: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: 'id',
    placeHolder: '请输入id'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    placeHolder: '请输入用户名'
  },
  {
    field: 'realname',
    type: 'input',
    label: '真实姓名',
    placeHolder: '请输入真实姓名'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '电话号码',
    placeHolder: '请输入电话号码',
    options: [
      { label: '篮球', value: 'basketball' },
      { label: '足球', value: 'football' }
    ]
  },
  {
    field: 'enable',
    type: 'select',
    label: '用户状态',
    placeHolder: '请选择用户状态',
    options: [
      { label: '启用', value: '1' },
      { label: '禁用', value: '0' }
    ]
  },
  {
    field: 'createAt',
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      startplaceHolder: '开始时间',
      endplaceHolder: '结束时间',
      type: 'daterange'
    }
  }
]
const labelWidth = '100px'
const fromConfig: IFormProps = {
  formItems,
  labelWidth
}
const fromData = {
  id: '',
  name: '',
  realname: '',
  cellphone: '',
  createAt: '',
  enable: ''
}

export { fromConfig, fromData }
