<input type="button" value="Generate Table" onclick="GenerateTable()" />
<hr />
<div id="dvTable"></div>
<script type="text/javascript">
    function GenerateTable() {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Customer Id", "Name", "Photo"]);
        customers.push([1, "John Hammond", "Images/1.jpg"]);
        customers.push([2, "Mudassar Khan", "Images/2.jpg"]);
        customers.push([3, "Suzanne Mathews", "Images/3.jpg"]);
        customers.push([4, "Robert Schidner", "Images/4.jpg"]);
 
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                if (j < 2) {
                    cell.innerHTML = customers[i][j];
                } else {
                    var img = document.createElement("IMG");
                    img.src = customers[i][j];
                    cell.appendChild(img);
                }
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
</script>