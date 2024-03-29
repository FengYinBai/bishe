// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUseOpenData: false,
    userInfo: {}
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: res => {
        console.log('获取成功')
        this.setData({
          userInfo: res.userInfo,
          canIUseOpenData: true
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('获取完成')
      }
    })
  },

  clickPingjia: function () {
    wx.navigateTo({
      url: '/pages/pingjia/pingjia',
    })
  },
  clickTuichuDenglu: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
    this.setData({
      canIUseOpenData: false
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})