var xmlHttp = xmlHttpRequestobject();

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
    try{
        xmlHttp.open("GET" , "bacon.txt" ,true);
        xmlHttp.onreadystatechange=handleServer();
        xmlHttp.send(null);
    }catch(e)
    {
        alert('roor middle');
    }
}else{
    alert('error midindo');
}

}

function handleServer()
{
    thed=document.getElementById('load');
    if(xmlHttp.readyState==1)
    {
        thed.innerHTML+="server connection is eshtablished";

    }else if(xmlHttp.readyState==2)
    {
        thed.innerHTML+="server ";

    }
    else if(xmlHttp.readyState==3)
    {
        thed.innerHTML+="server connection is eshtablished";

    }
    else if(xmlHttp.readyState==4 )
    {
    try{  
    Text=xmlHttp.responseText;
    document.getElementById("load").innerHTML += "status is completed" 
    document.getElementById("load").innerHTML+=Text;
    }catch(e)
    {
        alert('error last');
    }
}

}


