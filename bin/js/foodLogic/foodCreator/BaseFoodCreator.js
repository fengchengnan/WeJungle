/*
* 食物生成的基类，可以通过对象池重复利用，改变不同的参数即可
*/
var BaseFoodCreator = /** @class */ (function () {
    function BaseFoodCreator(type, max, skin) {
        this.init(type, max, skin);
    }
    /**
     * 重置食物生成点的属性，可以直接改变生成点的类型，可以用作对象池复用
     * 暂时可能用不到，因为食物生成点存在以后不太可能有变化
     * @param type
     * @param max
     * @param skin
     */
    BaseFoodCreator.prototype.reset = function (type, max, skin) {
        this.init(type, max, skin);
    };
    BaseFoodCreator.prototype.init = function (type, max, skin) {
        this.foodType = type;
        this.maxNum = max;
        this.skinEnum = skin;
    };
    Object.defineProperty(BaseFoodCreator.prototype, "position", {
        get: function () {
            return this._pos;
        },
        set: function (p) {
            this._pos = p;
            if (this._skinView != null) {
                this._skinView.x = p.x;
                this._skinView.y = p.y;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFoodCreator.prototype, "foodType", {
        get: function () {
            return this._foodType;
        },
        set: function (type) {
            this._foodType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFoodCreator.prototype, "maxNum", {
        get: function () {
            return this._maxNum;
        },
        /**
         * 刷新食物的最大数量
         */
        set: function (n) {
            this._maxNum = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFoodCreator.prototype, "skinEnum", {
        get: function () {
            return this._skinType;
        },
        /**
         * 设置刷新点皮肤
         */
        set: function (value) {
            if (value == this.skinEnum)
                return;
            this._skinType = value;
            //具体可以通过工厂获取，对象池中重复利用，不在视野内的可以不用显示皮肤
            if (this._skinView != null) {
                //回收进对象池
            }
            this._skinView = new BaseFoodCreatorSkin();
            Laya.stage.addChild(this._skinView);
        },
        enumerable: true,
        configurable: true
    });
    BaseFoodCreator.prototype.start = function () {
        Laya.timer.loop(2000, this, this.onTimer);
    };
    BaseFoodCreator.prototype.onTimer = function () {
        this.create();
    };
    BaseFoodCreator.prototype.create = function () {
    };
    return BaseFoodCreator;
}());
//# sourceMappingURL=BaseFoodCreator.js.map