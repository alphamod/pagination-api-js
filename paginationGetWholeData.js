var myXmlReq= new XMLHttpRequest();
myXmlReq.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        data=JSON.parse(this.responseText);
        var nav=document.createElement("nav");
        var ul=document.createElement("ul");
        ul.setAttribute("class", "pagination")
        var datLenPage=data.length/10;
        for (i=1;i<=datLenPage;i++){
            var li=document.createElement("li");
            li.setAttribute("class", "page-item");
            var a=document.createElement("a");
            a.setAttribute("class", "page-link");
            a.setAttribute("onclick", "fun("+i+")");
            a.innerText=i
            li.appendChild(a);
            ul.appendChild(li);
        }
        nav.appendChild(ul);
        document.getElementById("container").appendChild(nav);

        
    }
}
function fun(num){
    document.getElementById("tbody").innerHTML="";
    var start=(num*10)-10;
    var end=start+10;
    var tbody=document.getElementById("tbody");
    for (j=start;j<end;j++){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
        td1.innerHTML=data[j].id;
        td2.innerHTML=data[j].realm;
        td3.innerHTML=data[j].username;
        td4.innerHTML=data[j].password;
        td5.innerHTML=data[j].email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr)
    }
}
myXmlReq.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users", true);
myXmlReq.send();
