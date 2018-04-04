Page({
  data: {
    types: [
      {
        name: '喜剧',
        img: '/assets/images/xiju.png'
      },
      {
        name: '动作',
        img: '/assets/images/dongzuo.png'
      },
      {
        name: '科幻',
        img: '/assets/images/kehuan.png'
      },
      {
        name: '爱情',
        img: '/assets/images/aiqing.png'
      },
      {
        name: '动画',
        img: '/assets/images/donghua.png'
      }
    ]
  },

  typeHandler(e){
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../subject-detail/subject-detail?type=' + type,
    })

  }
})