1.
引入siemens library:OPCXML.js  COMMON.js

2.
兩種讀取方式  1. subscription 定時讀取
              2. readvalue 手動讀取

              3.writevalueFN 手動寫入 

3.buildscript.js為間隔讀取中的庫
放入模板內後再使用下面的函式去讀取
function buildSubscription() {  


 SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);

}


2.
使用handlebars 當模板引擎，所以操作DOM元素時要寫在該模板的script內，
因為在當下頁面才讀取當下頁面的DOM元素

3.
handlebars為自己壓縮的非官方壓縮