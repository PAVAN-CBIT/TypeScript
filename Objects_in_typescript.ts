let product:any = {
    "Name": "Samsung TV",
    "Price": 56000.44,
    "Stock": true, 
    "ShippedTo": ['Delhi','Hyd'],
    "Qty":2,
    "Total":function(){
        return this.Qty * this.Price;
    },
    "Print":function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nStock=${this.Stock}\nQty=${this.Qty}\nTotal=${this.Total()}\nShippedTo=${this.ShippedTo}`);
    }
}
product.Print();
