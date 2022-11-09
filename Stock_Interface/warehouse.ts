interface StockItem {
    key: number;
    value: string;
}

class Box implements StockItem {
    key: number;
    value: string;

    constructor(key: number, value: string) {
        this.key = key;
        this.value = value;
    }

    get getValue(): string{
        return this.value;
    }
}

class Bag implements StockItem {
    key: number;
    value: string;

    constructor(key: number, value: string) {
        this.key = key;
        this.value = value;
    }

    get getValue(): string{
        return this.value;
    }
}

class warehouseSlot {
    private stockItem;

    constructor(stockItem: StockItem) {
        this.stockItem = stockItem;
    }

    get getItem(): StockItem{
        return this.stockItem;
    }

    updateItem(stockItem: StockItem) {
        this.stockItem = stockItem;
    }
}

const box= new Box(1, "box");
const slot = new warehouseSlot(box);

console.log(slot.getItem);

const bag= new  Bag(2, "bag");

slot.updateItem(bag);

console.log(slot.getItem);

