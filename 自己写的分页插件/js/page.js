(function ($) {
  $.fn.pageContent = function (str) {
    var defaults = {
      page: 1,
      page_size: 20,
      total: 2000,
      clickPage: function () {return}
    }
    defaults = $.extend(defaults, str);
    var pageSiez = defaults.total/defaults.page_size > 8 ? 8: defaults.total/defaults.page_size
    var ul = $('<ul>')
    function createPage (size) {
      ul.html('')
      for(let i = 0; i < size; i++) {
        var li = $('<li>')
        ul.append(li)
      }
      $('#page').append(ul)
    }
    createPage(pageSiez)
    function initFillInNumber (start, index) {
      if (start >= defaults.total/defaults.page_size-5) {
        $.each($('#page ul li'), function (index, item) {
          if (index === 0) {
            $(item).addClass('number')
            $(item).html('1')
            return
          }
          if (index === 1) {
            $(item).html('...')
            return
          }
          $(item).addClass('number')
          $(item).html(defaults.total/defaults.page_size-7+index)
        })
      } else {
        $.each($('#page ul li'), function (index, item) {
          if (index === 6) {
            $(item).html('...')
            return
          }
          if (index === 7) {
            $(item).html(defaults.total/defaults.page_size)
            $(item).addClass('number')
            return
          }
          $(item).html(start+index)
          $(item).addClass('number')
        })
      }
      console.log(Number(index))
      $('#page ul li').eq(Number(index)).addClass('active')
    }
    initFillInNumber(1,0)
    function fillInNumber (start, index) {
      $.each($('#page ul li'), function (index, item) {
        if (index === 0) {
          $(item).addClass('number')
          $(item).html('1')
          return
        }
        if (index === 1 || index === 7) {
          $(item).html('...')
          return
        }
        if (index === 8) {
          $(item).html(defaults.total/defaults.page_size)
          $(item).addClass('number')
          return
        }
        $(item).addClass('number')
        $(item).html(start-4+index)
      })
      $('#page ul li').eq(4).addClass('active')
    }
    
    $(document).on("click",".number", function () {
      var index = $(this).index()
      defaults.clickPage($(this).text())
      if (Number($(this).text()) > 5 && Number($(this).text()) <= defaults.total/defaults.page_size-5) {
        createPage(9,)
        fillInNumber($(this).text(),index)
      } else if (Number($(this).text()) <= 5) {
        createPage(8)
        
        initFillInNumber(1,index)
      } else if (Number($(this).text()) > defaults.total/defaults.page_size-5) {
        createPage(8)
        initFillInNumber(defaults.total/defaults.page_size-5,index)
      }
    })
  }
})($)