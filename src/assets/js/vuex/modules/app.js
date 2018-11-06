const state = {
    User: {
        account: "",
        email: "",
        name: "",
        phone: "",        
        isLogin: false
    },
    errorState: {
        "more"  : "使用者帳號須在5-30個字元",
        "emailempty" : "信箱不得為空",
        "email" : "信箱已經被註冊過了",
        "phone" : "手機號碼已經被註冊過了",
        "tel"   : "必須為數字",
        "passwordempty" : "密碼不得為空",
        "less"  : "密碼須為英文數字混合且6位數以上",
        "same"  : "兩次輸入的密碼不一樣",        
        "type"  : "格式不正確",
        "agree" : "請勾選同意",
        "what"  : "無效的資料",
        "code"  : "驗證碼錯誤",
        "strange" : "不得包括特殊符號"
    },
    isLoading: false,
    billing: [
        "櫃檯出單機",
        "廚房出單機"
    ],
    setClass: [
        "沙拉套餐",
        "串炸套餐",
        "海鮮套餐",
        "牛肉套餐"
    ],
    setSubClass: [
        {level: 'B', types: '沙拉套餐', name: '沙拉1'},
        {level: 'B', types: '沙拉套餐', name: '沙拉2'},
        {level: 'B', types: '沙拉套餐', name: '沙拉3'},
        {level: 'B', types: '串炸套餐', name: '肉串炸'},
        {level: 'B', types: '串炸套餐', name: '蔬菜串炸'},
        {level: 'B', types: '串炸套餐', name: '天婦羅串炸'}
    ],
    setItem: [
        {level: 'C', types: '串炸套餐', name: '起司球'},
        {level: 'C', types: '串炸套餐', name: '泡菜起司球'},
        {level: 'C', types: '串炸套餐', name: '寧波年糕'},
        {level: 'C', types: '天婦羅串炸', name: '蝦'},
        {level: 'C', types: '天婦羅串炸', name: '花枝'},
        {level: 'C', types: '天婦羅串炸', name: '蛋'}
    ],
    rules: [
        "規則1",
        "規則2",
        "規則3"
    ]
};


const getters = {
    User: state => state.User,    
    errorState: state => state.errorState,
    isLoading: state => state.isLoading,
    billing: state => state.billing,
    setClass: state => state.setClass,
    setSubClass: state => state.setSubClass,
    setItem: state => state.setItem,
    rules: state => state.rules
};

const mutations = {
    setUserData(state, { userData }) {        
        state.User.account  = userData.email;
        state.User.name     = userData.name;
        state.User.phone    = userData.phone;
        state.User.isLogin  = true;
    },
    clearUserData(state) {
        state.User.account  = "";
        state.User.name     = "";
        state.User.phone    = "";
        state.User.isLogin  = false;
    },
    editUserData(state, {value} ) {
        state.User.email = value.email;
        state.User.name  = value.name;
        state.User.phone = value.phone;
    },
    isLoading (state) {
        state.isLoading = !state.isLoading
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations
}
  
  