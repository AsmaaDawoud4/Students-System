  ////*** ajax request onload page edit_student */   

    /**search input */
    $("#student_date").keyup(function () {
        $(".result").attr("hidden", false);
        var x = $(this).val();
        $.ajax(
            {
                type: 'post',
                url: 'assets/php/students/loaddata.php',
                data: 'q=' + x,
                success: function (data) {
                    $(".result").html(data);

                    $("a").on('click', function () {

                        document.getElementById('student_date').value = $(this).text();

                        $(".result").attr("hidden", true);
                    })



                }

            });

    });
    /**search value */
    $('.search').on('click', function () {
        var std_name = document.getElementById('student_date').value;

        /**select data values from db by giving std_name */
        $.ajax({
            url: "assets/php/students/search.php",
            type: 'get',
            dataType: 'json',
            data: { 'std_name': std_name },
            contentType: false,
            // processData: false,
            success: function (data) {
                $('#studentId').val(data.std_id);
                $('#studentName').val(data.value);
                $('#studentdate').val(data.Dob);
                $('#studentAdress').val(data.std_Adress);
                $('#RecommendedN').val(data.Relationship);
                if (data.std_sex == 'fmale') {

                    $('#fmale').prop('checked', true);
                }
                else {
                    $('#male').prop('checked', true);

                }
                if (data.std_rlgn == 'ﻣﺴﻠﻢ') {

                    $('#ﻣﺴﻠﻢ').prop('checked', true);
                }
                else {
                    $('#ﻣﺴﻴﺤﻲ').prop('checked', true);

                }
                if (data.std_lvl == 'كى جى') {

                    $('#kg ').prop('selected', true);
                }
                else if (data.std_lvl == 'اﻻﺑﺘﺪاﺋﻲ') {

                    $('#eb').prop('selected', true);
                }
                else {
                    $('#p').prop('selected', true);
                }

                if (data.std_stge == 'كى جى') {

                    $('.kg ').prop('selected', true);
                }
                else if (data.std_stge == 'الاول الابتدائى') {

                    $('.eb1 ').prop('selected', true);
                }
                else if (data.std_stge == 'الثانى الابتدائى') {

                    $('.eb2 ').prop('selected', true);
                }
                else if (data.std_stge == 'الثالث الابتدائى') {

                    $('.eb3 ').prop('selected', true);
                }
                else if (data.std_stge == 'الرابع الابتدائى') {

                    $('.eb4 ').prop('selected', true);
                }
                else if (data.std_stge == 'الخامس الابتدائى') {

                    $('.eb5 ').prop('selected', true);
                }
                else if (data.std_stge == 'الخامس الابتدائى') {

                    $('.eb5 ').prop('selected', true);
                }
                else if (data.std_stge == 'السادس الابتدائى') {

                    $('.eb6 ').prop('selected', true);
                }
                else if (data.std_stge == ' الاول الاعدادى') {

                    $('.p1 ').prop('selected', true);
                }
                else if (data.std_stge == ' الثانى الاعدادى') {

                    $('.p2').prop('selected', true);
                }
                else {

                    $('.p3 ').prop('selected', true);
                }
                if (data.std_class == 'كى جى') {

                    $('.kg ').prop('selected', true);
                }
                else if (data.std_class == 'الاول الابتدائى') {

                    $('.eb1 ').prop('selected', true);
                }
                else if (data.std_class == 'الثانى الابتدائى') {

                    $('.eb2 ').prop('selected', true);
                }
                else if (data.std_class == 'الثالث الابتدائى') {

                    $('.eb3 ').prop('selected', true);
                }
                else if (data.std_class == 'الرابع الابتدائى') {

                    $('.eb4 ').prop('selected', true);
                }
                else if (data.std_class == 'الخامس الابتدائى') {

                    $('.eb5 ').prop('selected', true);
                }
                else if (data.std_class == 'الخامس الابتدائى') {

                    $('.eb5 ').prop('selected', true);
                }
                else if (data.std_class == 'السادس الابتدائى') {

                    $('.eb6 ').prop('selected', true);
                }
                else if (data.std_class == ' الاول الاعدادى') {

                    $('.p1 ').prop('selected', true);
                }
                else if (data.std_class == ' الثانى الاعدادى') {

                    $('.p2').prop('selected', true);
                }
                else {

                    $('.p3 ').prop('selected', true);
                }
                if (data.std_custody == 'fath') {

                    $('#fath ').prop('selected', true);
                }
                else if (data.std_custody == 'moth ') {

                    $('#moth ').prop('selected', true);
                }
                else {

                    $('#other').prop('selected', true);
                }


                $('#RecommendedName').val(data.R_Name);
                $('#fatherName').val(data.fath_name);
                $('#fatherId').val(data.fath_id);
                $('#fatherNo').val(data.fath_tel);
                $('#fatherJob').val(data.fath_job);
                $('#motherName').val(data.moth_name);
                $('#motherId').val(data.moth_id);
                $('#motherNo').val(data.moth_tel);
                $('#registrationNumber').val(data.reg_N);
                $('#studentCountybirth').val(data.std_Cbirth);
                $('#studentNa').val(data.std_std_sexn);
                $('#motherJob').val(data.moth_job);
                $('#mothercertf').val(data.moth_certif);
                $('#fathercer').val(data.fath_certif);


            },
            error: function (data) {
                console.log(data);
            }
        });

    });
 
//////student-record main informations**///
$(".focuseoutt").focusout(function () {

    var std_id = $(this).val();
    
    /**select data values from db by giving std_id */
    $.ajax({
        url: "assets/php/students/student_record.php",
        type: 'get',
        dataType: 'json',
        data: { 'std_id': std_id },
        contentType: false,
        // processData: false,
        success: function (data) {
            $('#studentName').val(data.value);
            $('#studentdate').val(data.Dob);
            $('#studentAdress').val(data.std_Adress);
            $('#RecommendedN').val(data.Relationship);
            if (data.std_sex == 'fmale') {

                $('#fmale').prop('checked', true);
            }
            else {
                $('#male').prop('checked', true);

            }
            if (data.std_rlgn == 'ﻣﺴﻠﻢ') {

                $('#ﻣﺴﻠﻢ').prop('checked', true);
            }
            else {
                $('#ﻣﺴﻴﺤﻲ').prop('checked', true);

            }
            if (data.std_lvl == 'كى جى') {

                $('#kg ').prop('selected', true);
            }
            else if (data.std_lvl == 'اﻻﺑﺘﺪاﺋﻲ') {

                $('#eb').prop('selected', true);
            }
            else {
                $('#p').prop('selected', true);
            }

            if (data.std_stge == 'كى جى') {

                $('.kg ').prop('selected', true);
            }
           else if (data.std_stge == 'الاول الابتدائى') {

                $('.eb1 ').prop('selected', true);
            }
            else if (data.std_stge == 'الثانى الابتدائى') {

                $('.eb2 ').prop('selected', true);
            }
            else if (data.std_stge == 'الثالث الابتدائى') {

                $('.eb3 ').prop('selected', true);
            }
            else if (data.std_stge == 'الرابع الابتدائى') {

                $('.eb4 ').prop('selected', true);
            }
            else if (data.std_stge == 'الخامس الابتدائى') {

                $('.eb5 ').prop('selected', true);
            }
            else if (data.std_stge == 'الخامس الابتدائى') {

                $('.eb5 ').prop('selected', true);
            }
            else if (data.std_stge == 'السادس الابتدائى') {

                $('.eb6 ').prop('selected', true);
            }
            else if (data.std_stge == ' الاول الاعدادى') {

                $('.p1 ').prop('selected', true);
            }
            else if (data.std_stge == ' الثانى الاعدادى') {

                $('.p2').prop('selected', true);
            }
            else  {

                $('.p3 ').prop('selected', true);
            }
            if (data.std_class == 'كى جى') {

                $('.kg ').prop('selected', true);
            }
           else if (data.std_class == 'الاول الابتدائى') {

                $('.eb1 ').prop('selected', true);
            }
            else if (data.std_class == 'الثانى الابتدائى') {

                $('.eb2 ').prop('selected', true);
            }
            else if (data.std_class == 'الثالث الابتدائى') {

                $('.eb3 ').prop('selected', true);
            }
            else if (data.std_class == 'الرابع الابتدائى') {

                $('.eb4 ').prop('selected', true);
            }
            else if (data.std_class == 'الخامس الابتدائى') {

                $('.eb5 ').prop('selected', true);
            }
            else if (data.std_class == 'الخامس الابتدائى') {

                $('.eb5 ').prop('selected', true);
            }
            else if (data.std_class == 'السادس الابتدائى') {

                $('.eb6 ').prop('selected', true);
            }
            else if (data.std_class == ' الاول الاعدادى') {

                $('.p1 ').prop('selected', true);
            }
            else if (data.std_class == ' الثانى الاعدادى') {

                $('.p2').prop('selected', true);
            }
            else  {

                $('.p3 ').prop('selected', true);
            }
            if (data.std_custody == 'fath') {

                $('#fath ').prop('selected', true);
            }
           else if (data.std_custody == 'moth ') {

                $('#moth ').prop('selected', true);
            }
            else  {

                $('#other').prop('selected', true);
            }

            
            $('#RecommendedName').val(data.R_Name);
            $('#fatherName').val(data.fath_name);
            $('#fatherId').val(data.fath_id);
            $('#fatherNo').val(data.fath_tel);
            $('#fatherJob').val(data.fath_job);
            $('#motherName').val(data.moth_name);
            $('#motherId').val(data.moth_id);
            $('#motherNo').val(data.moth_tel);
            $('#registrationNumber').val(data.reg_N);
            $('#studentCountybirth').val(data.std_Cbirth);
            $('#studentNa').val(data.std_std_sexn);
            $('#motherJob').val(data.moth_job);
            $('#mothercertf').val(data.moth_certif);
            $('#fathercer').val(data.fath_certif);


        },
        error: function (data) {
            console.log(data);
        }
    });
});
//////student-record main informations**///
/**check about std_custody and given value*/
  var std_custody = $("#std_custody").val();


    if (std_custody == 'other') {
        $('#RecommendedName').prop('disabled', false);
        $('#RecommendedN').prop('disabled', false);
       
    }
    else {
        $('#RecommendedName').prop('disabled', true)
        $('#RecommendedN').prop('disabled', true);
        $('#RecommendedName').prop('value',);
        $('#RecommendedN').attr('value', );
    }
    $("#std_custody").focusout(function myFunction() {
        var std_custody = $(this).val();


        if (std_custody == 'other') {
            $('#RecommendedName').prop('disabled', false);
            $('#RecommendedN').prop('disabled', false);
        }
        else {
            $('#RecommendedName').prop('disabled', true)
            $('#RecommendedN').prop('disabled', true);
        }

    });
    $('.add_absent').on('click',function () {
    
        var std_id = $(".focuseoutt").val();
        var std_absent= $('#std_absent').val();
        
        var note =$('#note').val();
        var ex=$('#ex').val();
   
        // /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/student_record2.php",
            type: 'get',
            dataType: 'json',
            data: { 'std_id': std_id,std_absent:std_absent,note:note,ex:ex },
            contentType: false,
            // processData: false,
            
        })
    })


