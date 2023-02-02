var ss = [10, 20, 30, 40, 50, 60, 70];
for(var i = 0; i < 7; i++)
{
    var sr = ss[i];
    if(sr == ss[2])
    {
        continue;
    }
    console.log("ss1", + sr)
}


var ss1 = [10, 20, 30, 40, 50, 60, 70];
for(var i = 0; i < 7; i++)
{
    var sr = ss1[i];
    if(sr == ss1[2])
    {
        continue;
    }

    if(sr == '60')
    {
        continue;
    }
    console.log("ss1", + sr)
}