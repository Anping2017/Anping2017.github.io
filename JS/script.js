function ajaxRequest(url, method, data, asynch, responseHandler) {
    var request = new XMLHttpRequest();
    request.open(method, url, asynch);
    if (method == "POST")
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                responseHandler(request.responseText);
            }
        }
    };
    request.send(data);
}

getAllProduct();

function getAllProduct() {
    var data = "";
    ajaxRequest("getAllProduct.php", "POST", data, true, doGetAll);
}

function doGetAll(response) {
    var produc = document.getElementById("showing");
    clearDiv(produc);

    produc.innerHTML = response;
}

function clearDiv(theDiv) {
    while (theDiv.firstChild) {
        theDiv.removeChild(theDiv.firstChild);
    }
}

function next() {
    //验证非0的物品


    var sTableName = document.getElementById("porduct_list");
    var tablerows = sTableName.children[0];
    var arr = [];
    var buy = [];
    for (var i = 0; i < tablerows.childElementCount; i++) {
        //console.log(tablerows.children[i].children[2].children[1].value);
        if (tablerows.children[i].children[3].children[1].value != 0) {
            var name = tablerows.children[i].children[0].innerHTML;
            var price = tablerows.children[i].children[1].innerHTML;
            var qty = tablerows.children[i].children[3].children[1].value;
            var total = parseFloat(price) * parseFloat(qty);

            buy = [name, price, qty, total];
        }
        arr.push(buy);
    }
    //得到arr
    var produc = document.getElementById("showing");

    clearDiv(produc)


    //输出arr
    




//for(var = 0; i<tablerows.childElementCount ; i++)
/*for(var i=0;i<sTableName.children[0].childElementCount;i++) 
{
  var tableRow = sTableName.children[0].children[i];
  console.log(tableRow.children[2].children[1].value)

  for(var j=0;j<tableRow.childElementCount;j++)
  {
    var tableColumn = tableRow.children[j];
    console.log('Cell ['+i+','+j+'] value: '+tableColumn.innerText);
  }
}*/
}

function minors(btn) {
    var qty = btn.nextSibling.value;
    if (qty >= 1) {
        btn.nextSibling.value = parseInt(qty) - 1;
    }
}

function plus(btn) {
    let qty = btn.previousSibling.value;
    btn.previousSibling.value = parseInt(qty) + 1;

}
