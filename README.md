# page
page
 $('#page').pageContent({
      page: 1, // 默认打开的页面
      page_size: 20, // 一页多少个
      total: 1000, // 一共多少页
      clickPage: function (index) {
        console.log('我是第'+index+'页') //点击页数触发事件
      }
    })
