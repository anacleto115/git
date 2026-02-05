window.onload = async function ()
{
    try
    {
		await btBuscar();
    }
    catch (ex)
    {
        Log(ex);
    }
};

async function btLimpiar()
{
    try
    {
		document.getElementById('lbNombre').value = "";
		btBuscar();
    }
    catch (ex)
    {
        Log(ex);
    }
}

async function btBuscar()
{
    try
    {
        let lista = ["Andres", "Felipe"];
        var tb_body = document.getElementById('tb_body');
		tb_body.innerHTML = "";
		
        let nombre = document.getElementById('lbNombre').value;
        for (var pos in lista)
		{
			if (nombre != "" && !lista[pos].includes(nombre))
			{
				continue;
			}		
			var nueva_fila = tb_body.insertRow(tb_body.rows.length);
			var columnas = 
				"<tr>" + 
					"<td>" + lista[pos] + "</td>" +
					"<td><input type='submit' value='Editar'/></td>" +
				"</tr>";
			nueva_fila.innerHTML = columnas;
		}
    }
    catch (ex)
    {
        Log(ex);
    }
}

async function Log(ex)
{
    try
    {
        alert(ex);
    }
    catch (ex)
    {
		
    }
}