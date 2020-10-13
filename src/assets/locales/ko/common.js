export default {
  /*** 
   * 这里是所有公共字段的存放处
   * 多人开发会有冲突，此处的所有冲突都选择保留
   * 如果对应模块没有所需字段,可进行追加（ctrl+f进行查看，如果存在可直接使用）
   * 保留双方冲突后如果有重名字段请进行修改（只可修改自己添加的字段名）
  ***/
  language: '언어',
  currentLang: '한국어',

  /*** 
   * 共有字段，仅用于页面文本(非表格label及多条件搜索label)
   * 表格label及搜索label请在对应语言页面单独定义
  ***/
  prompt: '힌트',
  success: '성공',
  failed: '失败',
  allSuccess: '全部成功',
  partFailed: '部分失败',
  allFailed: '全部失败',
  error: '错误',
  confirm: '确认',
  cancel: '取消',
  close: '关闭',
  edit: '编辑',
  check: '查看',
  save: '保存',
  delete: '删除',
  search: '搜索',
  selectAll: '全选',
  translation: '翻译',
  payment: '支付',
  startingTime: '开始',
  endTime: '结束',
  logout: '退出',
  signIn: '登录',
  empower: '授权',
  retry: '重试',
  title: '标题',
  localUpload: '上传',
  uploadSuccess: '上传成功!',

  /*** 
   * 校验和placeholder字段
  ***/
  prop: {
    messege: "内容不能为空！",
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择',
    allPlaceholder: '全部',
    noData: '暂无数据！'
  },
  
  /*** 
   * 弹窗及消息提示字段
  ***/
  tips: {
    title: '提示',
    success: '成功！',
    failed: '失败！',
    confirm: '确认',
    cancel: '取消',
    close: '关闭',
    save: '保存'
  }
}