import { IFormProps } from '@/base-ui/from'
const fromConfig: IFormProps = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeHolder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeHolder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
const fromData = {
  asd: '',
  name: '',
  createTime: ''
}
export { fromData, fromConfig }
