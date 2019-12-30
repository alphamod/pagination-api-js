function fun(num) {
    var myXmlReq = new XMLHttpRequest();
    myXmlReq.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users?page=" + num + "&limit=10", true);
    myXmlReq.send();
    myXmlReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
        }
        document.getElementById("tbody").innerHTML = "";
        data.forEach(function (element) {
            var tr = document.createElement("tr");
            let count = 0;
            Object.keys(element).forEach(function (key) {
                count++;
                if (count == 4) {
                    var td = document.createElement("td");
                    td.innerHTML = "<img src='"+element[key]+"'>";
                    tr.appendChild(td);
                }
                if (count > 5) {
                    return;
                }
                else if (count <= 5 && count != 4) {
                    var td = document.createElement("td");
                    td.innerText = element[key];
                    tr.appendChild(td);
                }
            })
            document.getElementById("tbody").appendChild(tr);
        })
    }
}

var nav = document.createElement("nav");
var ul = document.createElement("ul");
ul.setAttribute("class", "pagination")
datLenPage = 100 / 10;
for (i = 1; i <= datLenPage; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "page-item");
    var a = document.createElement("a");
    a.setAttribute("class", "page-link");
    a.setAttribute("onclick", "fun(" + i + ")");
    a.innerText = i
    li.appendChild(a);
    ul.appendChild(li);
}
nav.appendChild(ul);
document.getElementById("container").appendChild(nav);


