export default {
  /*** 
   * 这里是所有公共字段的存放处
   * 多人开发会有冲突，此处的所有冲突都选择保留
   * 如果对应模块没有所需字段,可进行追加（ctrl+f进行查看，如果存在可直接使用）
   * 保留双方冲突后如果有重名字段请进行修改（只可修改自己添加的字段名）
  ***/
  language: "Language",
  currentLang: "English",

  /*** 
   * 共有字段，仅用于页面文本(非表格label及多条件搜索label)
   * 表格label及搜索label请在对应语言页面单独定义
  ***/
  prompt: 'Prompt',
  success: 'Success',
  failed: 'Failed',
  allSuccess: 'Full Success',
  partFailed: 'Partly Failed',
  allFailed: 'All Failed',
  error: 'Error',
  confirm: 'OK',
  cancel: 'Cancel',
  close: 'Close',
  edit: 'Edit',
  check: 'View',
  save: 'Save',
  delete: 'Delete',
  search: 'Search',
  selectAll: 'Select All',
  translation: 'Translate',
  localUpload: 'Upload',
  payment: 'Payment',
  startingTime: 'From',
  endTime: 'To',
  logout: 'Log Out',
  signIn: 'Log In',
  empower: 'Authorize',
  retry: 'Retry',
  title: 'Title',
  uploadSuccess: 'Successful Upload !',

  /*** 
   * 校验和placeholder字段
  ***/
  prop: {
    messege: "Can't be empty",
    inputPlaceholder: 'Enter',
    selectPlaceholder: 'Select',
    allPlaceholder: 'All',
    noData: 'No Data !'
  },
  
  /*** 
   * 弹窗及消息提示字段
  ***/
  tips: {
    title: 'Prompt',
    success: 'Success !',
    failed: 'Failed !',
    confirm: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    save: 'Save',
    exportTip: 'Tasks submitted, please go to Export Management to download !'
  }
}