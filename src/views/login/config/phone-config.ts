export const rules = {
  phoneNumber: [
    {
      required: true,
      message: '必须输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{0,}$/,
      message: '手机号格式不正确',
      trigger: 'blur'
    }
  ],
  phoneCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    }
  ]
}
