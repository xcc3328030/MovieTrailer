import cfg from "../../common/config/index.js"
Page({
  data: {
    movie:{}
  },

  onLoad(options) {
    const { id } = options;

    wx.showLoading({
      title: '',
    })

    wx.request({
      url: `${cfg.domain}/detail/${id}`,
      success: (res) =>{
        const movie = res.data.data;
        this.setData({
          movie
        })
        wx.hideLoading();
      }
    })
  },


})