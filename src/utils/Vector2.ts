/*
* name;
*/
class Vector2
{
    private _x:number;
    private _y:number;
    constructor(x:number = 0,y:number = 0)
    {
        this._x = x;
        this._y = y;
    }

    public get x():number
    {
        return this._x;
    }
    public set x(v:number)
    {
        this._x = v;
    }

    public get y():number
    {
        return this._y;
    }

    public set y(v:number)
    {
        this._y = v;
    }

    public copy():Vector2
    {
        return new Vector2(this.x, this.y);
    }
    /**
     * 两个Vector相加，返回一个新vector
     * @param a 
     */
    public add(a:Vector2):Vector2
    {
        return new Vector2(a.x + this._x,a.y+this._y);
    }
    /**
     * 两个vector相加，返回本身
     * @param a 
     */
    public addBy(a:Vector2):Vector2
    {
        this._x+=a.x;
        this._y+=a.y;

        return this;
    }

    /**
     * 本身与新Vector相减，返回一个新vector
     * @param a 
     */
    public sub(a:Vector2):Vector2
    {
        return new Vector2(this._x - a.x ,this._y - a.y);
    }
    /**
     * 本身与新vector相加，返回本身
     * @param a 
     */
    public subBy(a:Vector2):Vector2
    {
        this._x -= a.x;
        this._y -= a.y;

        return this;
    }
    /**
     * vector乘某个数
     * @param v 
     */
    public multiBy(v:number):Vector2
    {
        this._x *= v;
        this._y *= v;
        return this;
    }

    public get normalize():Vector2
    {
        let temp = this.copy();
        temp.normalizeSelf();
        return temp;
    }

    public normalizeSelf():void
    {
        let m = this.magnitude;
        if(m == 0)
        {
            return;
        }

        this.x = this.x/m;
        this.y = this.y/m;
    }

    public get magnitude():number
    {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }


    public dot(v:Vector2):number
    {
        return this._x*v.x + this._y*v.y;
    }
    
    public static distance(a:Vector2, b:Vector2):number
    {
        let x:number = a.x - b.x;
        let y:number = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    }

    public static distanceSquare(a:Vector2, b:Vector2):number
    {
        let x:number = a.x - b.x;
        let y:number = a.y - b.y;
        return x * x + y * y;
    }
}