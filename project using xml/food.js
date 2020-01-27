xmlHttp=XmlHttpObjectRequest()

function XmlHttpObjectRequest()
{
    if(window.ActiveXObject)
    {
        try{
            xmlHttp=XMLHttpRequest()
        }catch(e)
        {
            xmlHttp=false;
        }
    }

    if(!xmlHttp)
    {
        alert("can't connect");
    }
    else
    {
        xmlHttp;
    }

}

function process() 
{
    if(xmlHttp.readystate==2 || xmlHttp.readystate==4)
    {
        xmlHttp=encodeURIComponent(document.getElementById('userinput').value)
        xmlHttp.open('GET','basic.php?food',true);
        xmlHttp=handleserverrequest();
        xmlHttp.send(null);
    }
    else
    {
        settimer(process,1000);
    }

    function handleserverrequest()
    {
        if(xmlHttp.readystate==4)
        {
            if(xmlHttp.status==200)
            {
                xmlHttpresponse=xmlHttp.responseXML;
                xmlHttpdocument=xmlHttp.documentElement;
                message=xmlHttpdocument.firstchild.data;
                document.getElementById("userinput").innerHTML=message;
                settimeout(process(),1000);

            }else{
                alert("something went wrong ");
            }
        }
        

    }
}