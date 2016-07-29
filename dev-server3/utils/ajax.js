import $ from 'jquery';

export function get(serverURL){
	var defer = $.Deferred();
	var option = {
   	   url:serverURL,
   	   type: 'GET',
   	   dataType:'json',
   	   timeout : 100000, //超时时间设置，单位毫秒
   	   error: function (err) {
   		   defer.reject(err) ;
   	   },
   	   success:function (result) {
   		   defer.resolve(result);
   	   }
	 };
   	 $.ajax(option); //发送ajax请
   	 return defer.promise();
}
