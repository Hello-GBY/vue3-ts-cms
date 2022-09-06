const contentTableConfig: any = {
  title: '用户列表',
  columns: [
    // { prop: 'id', label: '序号', width: 80 },
    { prop: 'name', label: '用户名', minWidth: 120 },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: 150
    },
    { prop: 'cellphone', label: '电话号码', minWidth: 130 },
    { prop: 'enable', label: '状态', minWidth: 90, slotName: 'enable' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 220,
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      minWidth: 220
    },
    { label: '操作', slotName: 'handler', minWidth: 150 }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}

export { contentTableConfig }
