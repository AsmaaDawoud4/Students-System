
$(document).ready(function () {
    ////*** ajax request onload page edit_student */   
    var dTable_showAbsent=$('.show_absent').DataTable();
    /**search input */
    $("#studentdate").click(function () {

        var std_absent = $(this).val();
        console.log(std_absent)
        $.ajax(
            {
                type: 'post',
                url: 'assets/php/students/contact-daily.php',
                dataType: 'json',
                data: { std_absent: std_absent },
                success: function (data) {
                    console.log('so')
                   
                        $.each(data, (key, value) => {
                            dTable_showAbsent.row.add(value).draw();
                        });
                
                }

            });

    });

});