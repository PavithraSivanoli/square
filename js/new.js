var a=parseInt(prompt("enter a number"));
string="";
for(i=0; i<a; i++)
{
	for(j=0; j<a; j++)
	{
		if(i==0 || j==0 || i==a-1 ||j==a-1)
		{
		string +="*"//console.log("*");
		}
        else
		{
		string +=" "// console.log(" ");
	}
	string +="\n";	
	}
	//console.log("<br>");

console.log(string);
