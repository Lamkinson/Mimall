const STORAGE_KEY = 'mall'

export default {
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    //获取某一个模块下的key
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) return val[key]
        } else return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') //将得到的字符串数据转化为JSON
    },
    clear(key, module_name) {
        val = this.getStorage()
        if (module_name) {
            delete val[module_name][key]
        } else delete val[key]
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    },
}
