var xmlHttp= xmlHttpcreateobject();

function xmlHttpRequestobject()
{
    var xmlHttp;
    if(window.XMLHttpRequest)
    {        
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp=new XMLHttpRequest("microsoft");
    }
    
    return xmlHttp;
}

function process()
{
    if(xmlHttp)
   {
       xmlHttp.open("GET","basic.xml",true);
       xmlHttp.onreadystatechange= function(){
           if(xmlHttp.readystate==4 || xmlHttp.status==200)
           {
               var xmlHttpresponse=xmlHttp.responsexml;
               var root = xmlHttpresponse.documentElement;
               var names=root.getElementsByTagName("name");
               var ssns = root.getElementsByTagName("ssns");
               for(var i=0;i<=name.length;i++)
               {
                   var stuff= names.item[i].firtchild.data+".."+xml;
               }
           }

       }
       xmlHttp.send();
   } 
    
}


