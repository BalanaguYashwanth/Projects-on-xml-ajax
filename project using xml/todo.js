var xmlHttp= xmlHttpRequestobject();

function xmlHttpRequestobject()
{
    if(window.XMLHttpRequest)
    {
        var xmlHttp = new XMLHttpRequest;

    }
    else
    {
        alert("not support");
    }

    return xmlHttp;
}

function process()
{ 

    xmlHttp=new XMLHttpRequest;
    
    xmlHttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        text=this.responseText; 
        //tag= text.getElementsByTagName("P");
        var i;
        var txt="";
       // for(i=0;i<tag.length;i++)
        //{
         //   txt = txt + tag[i].childNodes[0].nodeValue+"<br>";

        //} 


        document.getElementById("mydiv").innerHTML=text;
        

      }
    };
    xmlHttp.open("GET", "ToDo app.html", true);
    xmlHttp.send();
}

