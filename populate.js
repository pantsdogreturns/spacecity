function generate(matrix)
{
	var str = "";
	for(var i = 0; i<matrix.length;i++)
	{
		str +=  "<p> ";
		for(var j = 0;j<matrix[i].length;j++)
		{
			str += matrix[i][j].toString() + " ";
		}
		str += "</p>";
	}
	console.log(str);
	document.getElementById('mat').innerHTML = str;
}
function populate(matrix)
{
	
}