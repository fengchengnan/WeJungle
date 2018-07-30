/*
* name;
*/
var DisplayUtil = /** @class */ (function () {
    function DisplayUtil() {
    }
    /**
     * 移除一个对象
     * @param dis 需要被移除的对象
     */
    DisplayUtil.removeSprite = function (dis) {
        if (dis == null)
            return;
        dis.removeSelf();
    };
    return DisplayUtil;
}());
//# sourceMappingURL=DisplayUtil.js.map