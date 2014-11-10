//TODO: Please write code in this file.

function printInventory(inputs)
{

    var num = inputs.length;
    var new_inputs = new Array();
    var i,j = -1,all = 0;
    var item = loadAllItems();
    var cont = '***<没钱赚商店>购物清单***\n';
    function Item(count,barcode)
    {
        this.count = count;
        this.barcode = barcode;
    }

                                       
    for(i=0;i<num;i++)								//合并相同物品
    {
        if ((i!=0)&&(inputs[i] == (new_inputs[j]).barcode))
            (new_inputs[j].count)++;
        else
        {
            new_inputs[++j] =new Item(1,inputs[i]);
        }
    }
    function find(n)                                                        //遍历查找
    {
        var t = 0 ;
        while(new_inputs[n].barcode != item[t].barcode)
        t++;
        return t;
    }
    for(i = 0; i < j+1; i++)
    {                                                                       //打印
        var n = find(i);
        var price = (new_inputs[i].count)*(item[n].price);
        cont += "名称：" + item[n].name + "，数量：" + new_inputs[i].count + item[n].unit+"，单价：" + item[n].price.toFixed(2)  + "(元)，小计：" + price.toFixed(2) + "(元)\n";
        all += price;
    }
    cont += "----------------------\n" +
    "总计："+all.toFixed(2) +"(元)\n"+
    "**********************";
    console.log(cont);

}


printInventory(inputs)
