//TODO: Please write code in this file.
var inputs;
inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];
function printInventory(inputs) {
    var item_num = inputs.length, i;
    var all = 0;
    var tail="";
    console.log('***<没钱赚商店>购物清单***\n');
    for (i = 0; i < item_num; i++) {
        var price = (inputs[i].count)*(inputs[i].price);
            new_input = "名称：" + inputs[i].name + ",数量：" + inputs[i].count + inputs[i].unit+",单价：" + inputs[i].price + "(元)，小计：" + price + "(元)\n";
        all += price;
        console.log(new_input);
    }
    tail= "----------------------\n" +
    "总计："+all+"(元)\n"+
    "**********************";
    console.log(tail);
}
printInventory(inputs);