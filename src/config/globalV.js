export default {  
    install(Vue,options)  
    {  
      Vue.prototype.baseUrl = function () {  
         return 'http://172.23.33.7:8081/finance_javaweb_02';  
      };  
      Vue.prototype.getTitle = {  
        title: '',  
        isBack: true,  
        isAdd: false,  
      };  
      Vue.prototype.showFootTab = {  
        isShow: false,  
        active: 0,  
      }  
    }  
  } 