export default {  
    install(Vue,options)  
    {  
      Vue.prototype.baseUrl = function () {  
         return 'http://localhost:8081/finance_javaweb';  
      };  
      Vue.prototype.getTitle = {  
        title:'',  
        isBack: true,  
        isAdd:  false,  
      };  
      Vue.prototype.showFootTab = {  
        isShow:false,  
        active:0,  
      }  
    }  
  } 