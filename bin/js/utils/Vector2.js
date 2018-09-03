/*
* name;
*/
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.copy = function () {
        return new Vector2(this.x, this.y);
    };
    /**
     * 两个Vector相加，返回一个新vector
     * @param a
     */
    Vector2.prototype.add = function (a) {
        return new Vector2(a.x + this._x, a.y + this._y);
    };
    /**
     * 两个vector相加，返回本身
     * @param a
     */
    Vector2.prototype.addBy = function (a) {
        this._x += a.x;
        this._y += a.y;
        return this;
    };
    /**
     * 本身与新Vector相减，返回一个新vector
     * @param a
     */
    Vector2.prototype.sub = function (a) {
        return new Vector2(this._x - a.x, this._y - a.y);
    };
    /**
     * 本身与新vector相加，返回本身
     * @param a
     */
    Vector2.prototype.subBy = function (a) {
        this._x -= a.x;
        this._y -= a.y;
        return this;
    };
    /**
     * vector乘某个数
     * @param v
     */
    Vector2.prototype.multiBy = function (v) {
        this._x *= v;
        this._y *= v;
        return this;
    };
    Object.defineProperty(Vector2.prototype, "normalize", {
        get: function () {
            var temp = this.copy();
            temp.normalizeSelf();
            return temp;
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.normalizeSelf = function () {
        var m = this.magnitude;
        if (m == 0) {
            return;
        }
        this.x = this.x / m;
        this.y = this.y / m;
    };
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.dot = function (v) {
        return this._x * v.x + this._y * v.y;
    };
    Vector2.distance = function (a, b) {
        var x = a.x - b.x;
        var y = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    };
    Vector2.distanceSquare = function (a, b) {
        var x = a.x - b.x;
        var y = a.y - b.y;
        return x * x + y * y;
    };
    return Vector2;
}());
//# sourceMappingURL=Vector2.js.map