DateTime = require('./DateTime');

let Date = new DateTime(2020,1,1,1,1,1,1);


for(var i =0;i<550;i++)
{

    console.log(Date.AddDays(1));
    console.log(Date.AddHours(1));
    console.log(Date.toString("dd/MM/yy"));
    console.log(Date.toString("dd/MM.yy-hh:mm"));
}