
$(document).ready(function () {
    ////*** ajax request onload page edit_student */   

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
                    if (data.success) {
                        $('tbody').empty().html(data.std_absent_data);
                    }
                }

            });

    });

});