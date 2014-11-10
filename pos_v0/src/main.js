//TODO: Please write code in this file.
function printInventory(inputs) {
    var item_num = inputs.length, i;
    var all = 0;  
    var cont = '***<没钱赚商店>购物清单***\n'
    for (i = 0; i < item_num; i++) {
        var price = (inputs[i].count)*(inputs[i].price);
            cont+= "名称：" + inputs[i].name + "，数量：" + inputs[i].count + inputs[i].unit+"，单价：" + inputs[i].price.toFixed(2) + "(元)，小计：" + price.toFixed(2) + "(元)\n";
        all += price;
    }
    cont +=  "----------------------\n" +
    "总计："+all.toFixed(2)+"(元)\n"+
    "**********************";
    console.log(cont);
}

