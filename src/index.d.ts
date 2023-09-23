// 不要带有import、export，其它文件能自动识别类型声明无需导入即可使用

/** 登录用户 */
declare type User = {
  /** 用户名 */
  username: string
  /** 密码 */
  password?: string
  /** 授权码 */
  token: string
}
