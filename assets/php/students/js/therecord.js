$(document).ready(function () {
    var dTable = $('.dataTables-material').DataTable();
/** ajax request to get data from database */
    $.ajax({
        type: 'get',
        url: "assets/php/students/therecord.php",
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function (data) {
            $.each(data, (key, value) => {
                dTable.row.add(value).draw();
            });
        },
        error: function (data) {
            console.log(data);
        }
    });
/**choose data from checkbox-dropdown */
    $('.data_column').change(function () {

        var values = [];
        var span_name = [];
        {
            $('.data_column :checked').each(function () {
                
                values.push($(this).attr('value'));/** array by choose value */
                span_name.push($(this).attr('name'));/**array by span db name */
                
            });

            elements = values.join(',')
            span_name = span_name.join(',')
            console.log(span_name + values)
            $.ajax({
                type: 'get',
                url: "assets/php/students/therecorddd.php",
                dataType: 'json',
                data:{ elements: elements, span_name: span_name },
                success: function (data) {
                   
                },
                error: function (data) {
                    console.log(data);
                }
            });
           
        }
    });

});