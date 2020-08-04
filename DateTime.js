
class DateTime {
    _DateObj = new Date();

    _Day = 0;
    get Day() { return this._Day; };
    set Day(value) { this._Day = value; this._update(); };

    _Month = 0;
    get Month() { return this._Month; };
    set Month(value) { this._Month = value; this._update(); };

    _Year = 0;
    get Year() { return this._Year; };
    set Year(value) { this._Year = value; this._update(); };

    _Hour = 0;
    get Hour() { return this._Hour; };
    set Hour(value) { this._Hour = value; this._update(); };

    _Second = 0;
    get Second() { return this._Second; };
    set Second(value) { this._Second = value; this._update(); };

    _Milisecond = 0;
    get Milisecond() { return this._Milisecond; };
    set Milisecond(value) { this._Milisecond = value; this._update(); };

    get Date(){ return new Date(`${this.Year}-${this.Month}-${this.Day}T0:0:0`);  }

    constructor(year, month, day, hour, minute, second, milisecond) {
        this._Year = year;
        this._Month = month;
        this._Day = day;
        this._Hour = hour;
        this._Minute = minute;
        this._Second = second;
        this._Milisecond = milisecond;
        this._update();
    }

    _update() {

               
        let daysInMonth =  new Date(this.Year, this.Month, 0).getDate();


        if(this.Month <0)
        {
            this._Year--;
            this._Month = 12;
            this._update();
        } 
        else if(this.Month > 12)
        {
            this._Month = 1;
            this._Year++;
            this._update();
            return;
        } 
        else if(this.minute > 59)
        {
            this._Minute = 0;
            this._Hour += 1;
            this._update();
            return;
        } 
        else if(this.minute < 0)
        {
            this._Minute = 59;
            this._Hour -= 1;
            this._update();
            return;
        } 
        else if(this.Hour < 0)
        {
            this._Hour = 23;
            this._Day -= 1;
            this._update();
            return;
        }
        else if(this.Hour > 23)
        {
            this._Hour = 0;
            this._Day += 1;
            this._update();
            return;
        } else if(this.Day < 1)
        {
            this._Month--;
            daysInMonth =  new Date(this.Year, this._Month, 0).getDate();
            this._Day = daysInMonth;
            this._update();
        } 
        else  if(this.Day > daysInMonth)
        {
            this._Day = 1;
            this._Month++;
            this._update();
            return;
        }

        this._DateObj = new Date(`${this.Year}-${this.Month}-${this.Day}T${this.Hour}:${this.Minute}:${this.Milisecond}`);
    }

    format(char,seg)
    {
        let str_day = (this._Day.toString().length == 1 ? "0"+this._Day : this._Day);
        let str_month = (this._Month.toString().length == 1 ? "0"+this._Month : this._Month);
        let str_year =  this._Year;
        let str_hour = (this._Hour.toString().length == 1 ? "0"+this._Hour : this._Hour);
        let str_minute = (this._Minute.toString().length == 1 ? "0"+this._Minute : this._Minute);
        let str_second = (this._Second.toString().length == 1 ? "0"+this._Second : this._Second);
        let str_milisecond = (this._Milisecond.toString().length == 1 ? "0"+this._Seco_Milisecondnd : this._Milisecond);

        if(char == "d")
        {
            if(seg == 1)
                return this._Day.toString();
            else if(seg == 2)
                return str_day;
        }
        else if(char == "M")
        {
            if(seg == 1)
                return this._Month.toString();
            else if(seg == 2)
                return str_month;
        }
        else if(char == "y")
        {
            if(seg == 1)
                return this._Year.toString();
            else if(seg == 2)
                return str_year;
        }
        else if(char == "h")
        {
            if(seg == 1)
                return this._Hour.toString();
            else if(seg == 2)
                return str_hour;
        }
        else if(char == "m")
        {
            if(seg == 1)
                return this._Minute.toString();
            else if(seg == 2)
                return str_minute;
        }
        else if(char == "s")
        {
            if(seg == 1)
                return this._Second.toString();
            else if(seg == 2)
                return str_second;
        }
    }

    toString(format) {

        let seperator = "/";
        let ret = "";
        let formatgroups = format.split(/[/.:-]+/);
        
        let seperatorIndex = 0;
        for(let i = 0;i<formatgroups.length;i++)
        {
            if(i>0) {
                ret += seperator;
            }
            seperator = format.charAt(seperatorIndex + formatgroups[i].length);
            seperatorIndex += formatgroups[i].length+1;

            ret += this.format(formatgroups[i][0], formatgroups[i].length);
        }
        
        return ret;
    }
    
    AddYears(value) {
        this.Year+=value;
        return this;
    }
    
    AddMonths(value) {
        this.Month+=value;
        return this;
    }

    AddDays(value) {
        this.Day+=value;
        return this;
    }

    AddHours(value) {
        this.Hour+=value;
        return this;
    }
    
    AddMinutes(value) {
        this.Minute+=value;
        return this;
    }

    AddSeconds(value) {
        this.Second+=value;
        return this;
    }

    AddMilliseconds(value) {
        this.Milisecond+=value;
        return this;
    }

    Now() {
        this._DateObj = new Date();
        this._Year = this._DateObj.getFullYear();
        this._Month = this._DateObj.getMonth()+1;
        this._Day = this._DateObj.getDate();
        this._Hour = this._DateObj.getHours();
        this._Minute = this._DateObj.getMinutes();
        this._Second = this._DateObj.getSeconds();
        this._Milisecond = this._DateObj.getMilliseconds();
        this._update();
    }

}

module.exports = DateTime;