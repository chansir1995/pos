//TODO: Please write code in this file.
var inputs;
inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    }
];
function printInventory(inputs) {
    var item_num = inputs.length, i,j=0;
    var all = 0;
    var tail="";
    var item=inputs;

    console.log('***<没钱赚商店>购物清单***\n');
    for (i = 0; i < item_num; i++){                                    //合并相同物品
        if (i == 0){item[j].barcode = inputs[i].barcode;
            item[j].name = inputs[i].name;
            item[j].unit = inputs[i].unit;
            item[j].price = inputs[i].price;
            item[j].count = 0;
        }

        if (inputs[i].barcode == item[j].barcode){
            (item[j].count)++;
        }

        else{
            j++;
            item[j].barcode = inputs[i].barcode;
            item[j].name = inputs[i].name;
            item[j].unit = inputs[i].unit;
            item[j].price = inputs[i].price;
            item[j].count = 1;
        }

    }
    for(i = 0; i < j+1; i++) {                                          //打印
        var price = (item[i].count)*(item[i].price);
        new_input = "名称：" + item[i].name + ",数量：" + item[i].count + item[i].unit+",单价：" + item[i].price + "(元)，小计：" + price + "(元)\n";
        all += price;
        console.log(new_input);
    }
    tail= "----------------------\n" +
    "总计："+all+"(元)\n"+
    "**********************";
    console.log(tail);



}

printInventory(inputs);