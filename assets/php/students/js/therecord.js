$(document).ready(function () {
    var dTable = $('.dataTables-material').DataTable();

    $.ajax({
        type: 'post',
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

    $('.data_column').change(function () {

        var values = [];
        var span_name = [];
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
});