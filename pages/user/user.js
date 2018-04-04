// pages/user/user.js
Page({
  data: {
    avatarUrl:"",
    nickName:"未知",
    movies: []
  },
  onLoad(){
    wx.getUserInfo({
      success:(res) => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
  },
  onShow() {
    let history = wx.getStorageSync('history')
    console.log(history)
    if (history) {
      this.setData({
        movies: history.slice(0, 2)
      })
    }
  },
  gotoHistory(){

  }
})