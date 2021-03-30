// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
    return reg.test(str)
}

// 时间戳转化日期
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

// 身份证号码验证
export function isvalidIdCard(str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
}

// 银行卡号
export function isvalidBankNo(str) {
    const reg = /\d{15}|\d{19}/
    return reg.test(str)
}


// 删除数组中指定对象
export function removeArray(arr, obj) {
    var length = arr.length
    for (var i = 0; i < length; i++) {
        if (arr[i] === obj) {
            if (i === 0) {
                arr.shift() // 删除并返回数组的第一个元素
                return arr
            } else if (i === length - 1) {
                arr.pop() // 删除并返回数组的最后一个元素
                return arr
            } else {
                arr.splice(i, 1) // 删除下标为i的元素
                return arr
            }
        }
    }
}