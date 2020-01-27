function process()
{
    var text = document.createTextNode("hi you are there");
    var myul = document.createElement("ul");
    var myli = document.createElement("li");
    var data = document.createTextNode("ho hai");
    myli.appendChild(data);
    myul.appendChild(myli);

    document.getElementById("div").appendChild(myul);
    document.getElementById("div").appendchild(text);





}