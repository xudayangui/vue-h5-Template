/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }

  /**
   * @param {number} time
   * @param {string} option
   * @returns {string}
   */
  export function formatTime(time, option) {
    if (('' + time).length === 10) {
      time = parseInt(time) * 1000
    } else {
      time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) {
      // less 1 hour
      return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
      return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
      return '1天前'
    }
    if (option) {
      return parseTime(time, option)
    } else {
      return (
        d.getMonth() +
              1 +
              '月' +
              d.getDate() +
              '日' +
              d.getHours() +
              '时' +
              d.getMinutes() +
              '分'
      )
    }
  }

  /**
   * @param {string} url
   * @returns {Object}
   */
  export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
          decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, ' ') +
          '"}'
    )
  }

  export function CurentTime() {
      var now = new Date()
      var y = now.getFullYear()
      var m = now.getMonth() + 1
      var d = now.getDate()
      if (m < 10) m = '' + '0' + m
      if (d < 10) d = '' + '0' + d
      var year = Number('' + y + m + d)
      if (year <= 20190204) {
          return 2018
      } else if (year > 20190204 && year <= 20200124) {
          return 2019
      } else if (year > 20200124 && year <= 20210211) {
          return 2020
      } else if (year > 20210211 && year <= 20220131) {
          return 2021
      } else if (year > 20220131 && year <= 20230121) {
          return 2022
      } else if (year > 20230121 && year <= 20240209) {
          return 2023
      }
  }
  const currentYear = CurentTime()
  const color = ['red', 'red', 'blue', 'blue', 'green', 'green', 'red', 'red', 'blue', 'blue', 'green',
  'red', 'red', 'blue', 'blue', 'green', 'green', 'red', 'red', 'blue', 'green', 'green',
  'red', 'red', 'blue', 'blue', 'green', 'green', 'red', 'red', 'blue', 'green',
  'green', 'red', 'red', 'blue', 'blue', 'green', 'green', 'red', 'blue', 'blue', 'green', 'green', 'red', 'red', 'blue', 'blue', 'green']
  const zooList = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊']
  export function shengxiao(number) {
      return zooList[(currentYear + 1 - number) % 12]
  }
  export function lhccolor(number) {
      return color[number]
  }
  // 金额
  export function formatMoney(val) {
      val = val.toString().replace(/\$|\,/g, '')
      if (isNaN(val)) {
          val = '0'
      }
      const sign = (val == (val = Math.abs(val)))
      val = Math.floor(val * 100 + 0.50000000001)
      let cents = val % 100
      val = Math.floor(val / 100).toString()
      if (cents < 10) {
          cents = '0' + cents
      }
      for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
          val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
      }
      return (((sign) ? '' : '-') + val + '.' + cents)
  }
  // 获取 url 参数
  export function getQueryString(key) {
      var url = window.location.href// 首先获取url
      if (url.indexOf('?') != -1) { // 判断是否有参数
          var strSub = null
          var str = url.split('?')// 根据？截取url
          var strs = str[1].split('&')// str[1]为获取？号后的字符串，并且根据&符号进行截取，得到新的字符串数组，这个字符串数组中有n个key=value字符串
          for (var i = 0; i < strs.length; i++) { // 遍历字符串数组
              strSub = strs[i].split('=')// 取第i个key=value字符串，并用“=”截取获得新的字符串数组 这个数组里面第0个字符是key，第1个字符value
              if (strSub[0] == key) { // 判断第0个字符与该方法的参数key是否相等，如果相等 则返回对应的值value。
                  return strSub[1]
              }
          }
      }
      return ''
  }
