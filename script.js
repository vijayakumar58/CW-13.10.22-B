function createtabels (tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}

function createthead (tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}

function createtr (tagname){
    var ele=document.createElement(tagname);
    return ele;
}

function createth (tagname,attrname,attrvalue,){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=contant;
    return ele;
}

function createtbody (tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}

function createtd (tagname){
    var ele=document.createElement(tagname);
    ele.innerHTML=contant;
    return ele;
}


var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Second";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Third";

var tbody=document.createElement("tbody");
tbody.setAttribute("classs","tboy");

var tr1=document.createElement("tr");

var td1=document.createElement("td");
td1.innerHTML="Mark";

var td2=document.createElement("td");
td2.innerHTML="otto";

var td3=document.createElement("td");
td3.innerHTML="@mdo";

tr1.append(td1,td2,td3);
tbody.append(tr1);

tr.append(th1,th2,th3);
thead.append(tr);

table.append(thead,tbody);
document.body.append(table);