var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

var Main =
{

};

Main.images = ["app/images/tvlogo.png", "app/images/tvlogo2.png"];

Main.onLoad = function()
{
    widgetAPI.sendReadyEvent();
    
    // Load images
    var i = 0;
    
    
    
    for(var image in this.images){
//    	alert(this.images[image]);
    }
    
    
    // Check for client ID & client secret
//    var clientId = localStorage.getItem('clientId');
//    alert("clientid:"+clientId);
//    if(!clientId){
//    	$('#clientId').focus();
//    }
//    localStorage.setItem('test', 'YO DAWG');
//    alert(localStorage.getItem('test'));
    
};

Main.onUnload = function()
{

};
