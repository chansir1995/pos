//TODO: Please write code in this file.
function printInventory(inputs)
{
    var item_num = inputs.length, i,j=-1;
    var all = 0;
    var item = new Array();
    var cont = '***<没钱赚商店>购物清单***\n';

    function Item(barcode,name,unit,price)
{
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
    this.count = 1;
}
    for (i = 0; i < item_num; i++)
    {                                                                   //合并相同物品
        if ((i != 0)&&(inputs[i].barcode == item[j].barcode))
         (item[j].count)++;
        else
            item[++j]=new Item(inputs[i].barcode,inputs[i].name,inputs[i].unit,inputs[i].price);


    }
    for(i = 0; i < j+1; i++) {                                          //打印
        var price = (item[i].count)*(item[i].price);
        cont += "名称：" + item[i].name + "，数量：" + item[i].count + item[i].unit+"，单价：" + item[i].price.toFixed(2)  + "(元)，小计：" + price.toFixed(2) + "(元)\n";
        all += price;
    }
    cont += "----------------------\n" +
    "总计："+all.toFixed(2) +"(元)\n"+
    "**********************";
    console.log(cont);

}

