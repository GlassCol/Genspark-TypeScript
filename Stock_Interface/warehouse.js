var Box = /** @class */ (function () {
    function Box(key, value) {
        this.key = key;
        this.value = value;
    }
    Object.defineProperty(Box.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var Bag = /** @class */ (function () {
    function Bag(key, value) {
        this.key = key;
        this.value = value;
    }
    Object.defineProperty(Bag.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    return Bag;
}());
var warehouseSlot = /** @class */ (function () {
    function warehouseSlot(stockItem) {
        this.stockItem = stockItem;
    }
    Object.defineProperty(warehouseSlot.prototype, "getItem", {
        get: function () {
            return this.stockItem;
        },
        enumerable: false,
        configurable: true
    });
    warehouseSlot.prototype.updateItem = function (stockItem) {
        this.stockItem = stockItem;
    };
    return warehouseSlot;
}());
var box = new Box(1, "box");
var slot = new warehouseSlot(box);
console.log(slot.getItem);
var bag = new Bag(2, "bag");
slot.updateItem(bag);
console.log(slot.getItem);
