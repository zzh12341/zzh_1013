export default {
  /*** 
   * 这里是所有公共字段的存放处
   * 多人开发会有冲突，此处的所有冲突都选择保留
   * 如果对应模块没有所需字段,可进行追加（ctrl+f进行查看，如果存在可直接使用）
   * 保留双方冲突后如果有重名字段请进行修改（只可修改自己添加的字段名）
  ***/
  language: '语言',
  currentLang: '中文简体',

  /*** 
   * 单位字段
   * 没有的可在此处追加
  ***/
  piece: '件',
  bill: '单',
  moneyUnit: '元',
  /*** 
   * 共有字段，仅用于页面文本(非表格label及多条件搜索label)
   * 表格label及搜索label请在对应语言页面单独定义
  ***/
  No: '序号',
  all: '全部',
  query: '查询',
  prompt: '提示',
  success: '成功',
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
  agree: '同意',
  recharg: '充值',
  operation: '操作',
  advancedClaim: '高级搜索',
  clearTxt: '清空条件',
  empty: '无内容',
  delSuccess: '删除成功',
  black: '返回',
  warning: '警告',
  export: '导出',
  batchExport: '批量导出',
  setDefault: '设为默认',
  helpCenter: '帮助中心',
  default: '默认',
  loading: '拼命加载中...',
  newOpenWindow: '新窗口打开',
  /**
   * 时间
   */
  startDate: '开始时间',
  endDate: '结束时间',
  timeSlot1: '最近一周',
  timeSlot2: '最近一个月',
  timeSlot3: '最近三个月',
  /*** 
   * 校验和placeholder字段
  ***/
  prop: {
    messege: "内容不能为空！",
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择',
    allPlaceholder: '全部',
    noData: '暂无数据！',
    orderAreaPlaceholder: '订单号，派送单号，客户参考号(多个单号请换行输入)',
    emailVliTips: '请输入正确的邮箱格式',
    phoenVliTips: '请输入正确的国内手机号码',
    menuNosetTips: '该用户尚未配置任何菜单，请确认！',
    getMenuErrorTips: '获取用户菜单失败'
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
    save: '保存',
    exportTip: '任务已提交,请去【导出管理】下载',
    delTip: '此操作将永久删除，是否继续？'
  },
  /**
   * 地址信息
   */
  contactPerson: '联系人',
  receivAddress: '收货地址',
  senderAddress: '发货地址',
  consignee: '收货人',
  sender: '发货人',
  postcode: '邮编',
  senderPostcode: '发货人邮编',
  iphone: '手机',
  phoneNo: '座机',
  email: '邮箱',
  country: '国家',
  province: '省份',
  city: '城市',
  address: '地址',
  houseNo: '门牌号',
  customsClearanceNo: '通关号',
  defaultAddress: '默认地址',
  /**
   * 订单信息
   */
  deliveryCompany: '配送商',
  expressType: '渠道类别',
  orderType: '包裹类型',
  originName: '出发地',
  destinationName: '目的地',
  insideNo: '订单号',
  referenceNo: '参考号',
  deliveryNo: '派送单号',
  orderStatus: '订单状态',
  createdDate: '下单日期',
  domesticExpressNo: '国内快递单号',
  returnExpressNumber: '国内退回单号'
}