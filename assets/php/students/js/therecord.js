$(document).ready(function () {
    var dTable = $('.dataTables-material').DataTable();
<<<<<<< HEAD
/** ajax request to get data from database */
    $.ajax({
        type: 'get',
=======

    $.ajax({
        type: 'post',
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225
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
<<<<<<< HEAD
/**choose data from checkbox-dropdown */
=======

>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225
    $('.data_column').change(function () {

        var values = [];
        var span_name = [];
<<<<<<< HEAD
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

=======
        $('.data_column :checked').each(function () {
            //if(values.indexOf($(this).val()) === -1){
            values.push($(this).attr('name'));
            span_name.push($(this).attr('value'));
            // }
        });

        elements = values.join(',')
        span_name = span_name.join(',')
        console.log(span_name + values)
        $.post('assets/php/students/therecorddd.php', { elements: elements, span_name: span_name },)
    });
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225
});