function ajaxRequest(url, method, data, asynch, responseHandler){
	var request = new XMLHttpRequest();
	request.open(method, url, asynch);
	if (method == "POST")
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
	request.onreadystatechange = function(){
	if (request.readyState == 4) {
		if (request.status == 200) {
			responseHandler(request.responseText);
			}
		}
	};
	request.send(data);
}



getAllProduct();

function getAllProduct(){
    var data = "";
    ajaxRequest("getAllProduct.php", "POST", data, true, doGetAll);
}

function doGetAll(response){
    var produc = document.getElementById("showing");
    clearDiv(produc);
    
    produc.innerHTML=response;
}


//For creating elements, the constructors
var newString = function(value) {
	var _dom_element = document.createElement("label");
	_dom_element.innerHTML = value;
		
	this.getDomElement = function(){
		return _dom_element;
	}
}

var newTextbox = function(id){
    var _dom_element = document.createElement("input");
    _dom_element.type = "text";
    _dom_element.id = id;
    
    this.getDomElement = function(){
        return _dom_element;
    }
    this.getTextValue = function(){
        return _dom_element.text;
    }
}

var newNmberText = function(id,min,max){
    var _dom_element=document.createElement("input");
    _dom_element.type = "number";
    _dom_element.min=min;
    _dom_element.max=max;
    _dom_element.id=id;

    this.getDomElement = function(){
        return _dom_element;
    }
    this.getTextValue = function(){
        return _dom_element.text;
    }
}

var newSelect = function(id,name,value){
    var _dom_element = document.createElement("input");
    _dom_element.type="radio";
    _dom_element.id=id;
    _dom_element.name=name;
    _dom_element.value=value;

    this.getDomElement=function(){
        return _dom_element;
    }
    this.getTextValue=function(){
        return _dom_element.value;
    }
}

var newButton = function(id, value, action){
    var _dom_element = document.createElement("input");
    _dom_element.id = id;
    _dom_element.type = "button";
    _dom_element.value = value;
    
    this.getDomElement = function() {
        return _dom_element;
    }
    
    _dom_element.onclick = function(){
        action.call(null);
    }
    
}

var newDiv = function(id){
    var _dom_element = document.createElement("div");
    _dom_element.id=id;
    
    this.getDomElement = function(){
        return _dom_element;
    }
}

function gotoLogin(){
    //alert("log");
    var showing = document.getElementById("showing");
    
    clearDiv(showing);
    
    var unameLabel = new newString("Username: ");
    var unameText = new newTextbox("uname");
    var pwdLabel = new newString("Password: ");
    var pwdText = new newTextbox("pwd");
    loginButton = new newButton("loginButton","Login",prossesLogin);
    signUpButton = new newButton("signButton","Sign up",gotoSignup);
    
    showing.appendChild(unameLabel.getDomElement());
    showing.appendChild(unameText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(pwdLabel.getDomElement());
    showing.appendChild(pwdText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(loginButton.getDomElement());
    showing.appendChild(signUpButton.getDomElement());
}

function gotoSignup(){
    var showing = document.getElementById("showing");
    
    clearDiv(showing);
    
    var suname = new newString("Username: ");
    var sunameText = new newTextbox("suname");
    var spwd = new newString("Password: ");
    var spwdText = new newTextbox("spwd");
    var srpwd = new newString("Re-password: ");
    var srpwdText = new newTextbox("srpwd");
    var ssub = new newString("Suburb: ");
    var ssubText = new newTextbox("suburb");
    var scity = new newString("City: ");
    var scityText = new newTextbox("city");
    var sage = new newString("Age: ");
    var sageText = new newNmberText("age",1,100);
    var ssex = new newString("Gender: ");
    var ssexMale = new newString("Male");
    var ssexMaleSelect = new newSelect("male","gender","male");
    var ssexFemale = new newString("Female");
    var ssexFemaleSelect = new newSelect("female","gender","female");
    var ssexOther = new newString("Other");
    var ssexOtherSelect = new newSelect("other","gender","other");
    var dosignButton = new newButton("doSign","Sign up",prossesSignup);
    
    showing.appendChild(suname.getDomElement());
    showing.appendChild(sunameText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(spwd.getDomElement());
    showing.appendChild(spwdText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(srpwd.getDomElement());
    showing.appendChild(srpwdText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(ssub.getDomElement());
    showing.appendChild(ssubText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(scity.getDomElement());
    showing.appendChild(scityText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(sage.getDomElement());
    showing.appendChild(sageText.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(ssex.getDomElement());
    showing.appendChild(ssexMale.getDomElement());
    showing.appendChild(ssexMaleSelect.getDomElement());
    showing.appendChild(ssexFemale.getDomElement());
    showing.appendChild(ssexFemaleSelect.getDomElement());
    showing.appendChild(ssexOther.getDomElement());
    showing.appendChild(ssexOtherSelect.getDomElement());
    showing.appendChild(document.createElement("br"));
    showing.appendChild(dosignButton.getDomElement());
    
}

function showFruit() {
    var data = "sort=fruit";
    ajaxRequest("showFriut.php","POST",data,true,doSHowing);
}



function showVege(){
    var data = "sort=vege";
    ajaxRequest("showVege.php","POST",data,true,doSHowing);
}

function showFro(){
    var data = "sort=frosen";
    ajaxRequest("showFro.php","POST",data,true,doSHowing);
}

function showMisc(){
    var data = "sort=misc";
    ajaxRequest("showMisc.php","POST",data,true,doSHowing);
}
//Loging in, get username and password, and check if correct
function prossesLogin(){
    var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
    
    if(uname && pwd){
	    var data = "uname="+uname+"&pwd="+pwd;
	    ajaxRequest("processLogin.php", "POST", data, true, doLogin);
    }
    else{
        console.log("Empty");
    }
}
/////////////////
function doLogin(response){
    console.log(response);
    if(response == 0){
        console.log("Fail");
    }
    else{
        //console.log("Logged");
        document.getElementById("logs").innerHTML = response+"(logout)";
        //document.getElementById("logs").setAttribute('href','./Logout.php');
        document.getElementById("logs").onclick = function(){
            //console.log("I hope it works!!");
            window.location="./Logout.php";
        };
        //the link of administrator function
        //I hope the result is onmouseon and onmouseout
        if(response==4){
            document.getElementById("userorder").innerHTML = "administrator";
            document.getElementById("usertool").style.visibility = "visible";
            document.getElementById("userorder").style.visibility = "visible";
            document.getElementById("userorder").onmouseover = function(){
                //console.log("I hope it works!!");
                adminInterFace();
            };
            document.getElementById("userorder").onmouseout = function(){
                getAllProduct();
            };
        }
        else{
            document.getElementById("userorder").style.visibility = "visible";
            document.getElementById("usertool").style.visibility = "visible";
        }
        clearDiv(showing);
        getAllProduct();
    }
}
//////////////

//add new user into the users table
function prossesSignup(){
    var uname = document.getElementById("suname").value;
    var pwd = document.getElementById("spwd").value;
    var rpwd = document.getElementById("srpwd").value;

    var subu = document.getElementById("suburb").value;
    var city = document.getElementById("city").value;
    var age = document.getElementById("age").value;

    //console.log(subu+city+age);

    var gender = "";
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    if(male.checked){
        gender = "male";
    }
    if(female.checked){
        gender = "female";
    }
    if(other.checked){
        gender="other";
    }

    //console.log(gender);
    var data = "uname="+uname+"&pwd="+pwd+"&rpwd="+rpwd+"&subu="+subu+"&city="+city+"&age="+age+"&gender="+gender;
    
    ajaxRequest("prossesSignup.php", "POST" , data, true, doprossesSignup);
}

function doprossesSignup(response){
    //alert(response);
    if(response != "fail"){
       // var log = document.getElementById("log");
        document.getElementById("logs").innerHTML = response + " (logout)";
        document.getElementById("logs").onclick = function(){
            //console.log("I hope it works!!");
            window.location="./Logout.php";
        };
        //log.href = "./Logout.php";
        clearDiv(showing);
        document.getElementById("userorder").style.visibility="visible";
        document.getElementById("usertool").style.visibility = "visible";
        getAllProduct();
    }
    else{
        alert("You cannot sign up, due to some problems.");
    }
    
}

function clearDiv(theDiv){
    while (theDiv.firstChild){
        theDiv.removeChild(theDiv.firstChild);
    }
}

function doSHowing(response){
    var showing = document.getElementById("showing");
    clearDiv(showing);
    showing.innerHTML = response;
}

function showDetail(name){
    data = "name="+name;
    ajaxRequest("getSelected.php", "POST" , data, true, doshowDetail);
    //console.log(name);
}

function doshowDetail(response){
    var showing = document.getElementById("showing");
    clearDiv(showing);

    showing.innerHTML = response;
}

function saveOrder(name,price,unit){
    //console.log(name+price+unit);
    var quant = document.getElementById("quant").value;
    if(quant){
        console.log(quant);
        var total=price*quant;
        console.log(total);
        var data = "name="+name+"&price="+price+"&quant="+quant+"&unit="+unit+"&total="+total;
        ajaxRequest("saveOrder.php", "POST" , data, true, dosaveOrder);

    }
    else{
        alert("Empty");
    }
}

function dosaveOrder(response){
    alert(response);
    getAllProduct();
}

function getChat(){
    var data = "";
    ajaxRequest("getChat.php","POST",data,true,dogetChat);
}

function dogetChat(response){
    var showing = document.getElementById("showing");
    showing.innerHTML=response;
}

function setOrder(){
    var checklength = document.getElementsByName("chat").length;
    var checkb = document.getElementsByName("chat");
    var cVal = [];
    for(var i=0;i<checklength;i++){
        var checkR = checkb[i].checked;
        var checkVal = checkb[i].value;
        if(checkR){
            cVal.push(checkVal);
        }
    }

    if(cVal.length!=0){
        var data = "goods="+JSON.stringify(cVal);
        ajaxRequest("proOrder.php","POST", data , true , doproOrder);
    }
    else{
        alert("No item is selected for order!");
    }
    //console.log(cVal);
}

function doproOrder(response){
    //console.log(response);
    var showing = document.getElementById("showing");
    clearDiv(showing);
    showing.innerHTML=response;
}

function confOrder(){
    
    var tableBottom = document.getElementById("table").rows.length;
    var sum = document.getElementById("table").rows[tableBottom-1].cells[1].innerHTML;
    var bodyLength = document.getElementById("table").rows.length-2;
    var cId = [];

    for(var i=0; i<bodyLength; i++){
        var idValue = document.getElementById("table").rows[i+1].cells[0].innerHTML;
        
        cId.push(idValue);
    }

    var date = getDate();
    var recver = document.getElementById("nameText").value;
    var phone = document.getElementById("phoneText").value;
    var pAddr = document.getElementById("addrText").value;
    var eMail = document.getElementById("emailText").value;

    var pay = "";
    var payOn = document.getElementById("on");
    var payOff = document.getElementById("off");
    var con ="";
    var condev = document.getElementById("dev");
    var conpick = document.getElementById("pick");

    
    if(on.checked){
        pay = "online";
    }
    else if(off.checked){
        pay = "offline";
    }
    if(condev.checked){
        con = "delivery";
    }
    else if(conpick.checked){
        con = "pick";
    }

    if(recver && phone && pAddr && eMail && pay!=""&& con!=""){
        var data = "idArray="+JSON.stringify(cId)+"&date="+date+"&reciver="+recver+"&phone="+phone+
                   "&address="+pAddr+"&email="+eMail+"&pay="+pay+"&con="+con+"&sum="+sum;
        ajaxRequest("makeOrder.php","POST", data , true , doconfOrder);
    }
    else{
        alert("Some details are missing!!");
    }
}

function doconfOrder(response){
    alert(response);
}

function removeChat(){
    var checklength = document.getElementsByName("chat").length;
    var checkb = document.getElementsByName("chat");
    var cVal = [];
    for(var i=0;i<checklength;i++){
        var checkR = checkb[i].checked;
        var checkVal = checkb[i].value;
        if(checkR){
            cVal.push(checkVal);
        }
    }
    if(cVal.length!=0){
        var data = "goods="+JSON.stringify(cVal);
        ajaxRequest("removeChat.php","POST", data , true , doremoveChat);
        alert(response);
    }
    else{
        alert("No product is selected!");
    }
}

function doremoveChat(response){
    alert(response);
    getChat();
}

function updateChat(){
    var checklength = document.getElementsByName("chat").length;
    var checkb = document.getElementsByName("chat");
    var cVal = [];

    var quantlength = document.getElementsByName("quantity").length;
    var quantvalue = document.getElementsByName("quantity");
    var newQuant=[];
    for(var i=0;i<checklength;i++){
        
        var checkVal = checkb[i].value;
        var quant = quantvalue[i].value;

        cVal.push(checkVal);
        newQuant.push(quant);
    }
    var sentId = JSON.stringify(cVal);
    var sentQuant = JSON.stringify(newQuant);
    var data = "idArrayJ="+sentId+"&quantArrayJ="+sentQuant;
    ajaxRequest("upDateChat.php", "POST", data, true, doupdateChat);
}

function doupdateChat(response){
    alert(response);
    getChat();
}

function getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var today = dd+'/'+mm+'/'+yyyy;
    return today;
}

function getOrder(){
    ajaxRequest("getUserOrder.php","POST","",true,dogetOrder);
}

function dogetOrder(response){
    var showing = document.getElementById("showing");
    clearDiv(showing);
    //console.log(response);
    showing.innerHTML = response;
}

function adminInterFace(){
    var showing=document.getElementById("showing");
    clearDiv(showing);
}