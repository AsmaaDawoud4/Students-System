
//*******************edit_studentdata************//
$(document).ready(function () {
    ////*** ajax request onload page edit_student */   
  
    $.ajax({
        url: "assets/php/students/editing-data.php",
        type: 'post',
        dataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            /**request sucess and given data */
            $('#studentName').val(data.value);
            
            var img = new Image();
            img.src = `assets/imgs/${data.image}`;
            var myCanvas = document.getElementById('stdimg');
            var ctx = myCanvas.getContext("2d");
            ctx.drawImage(img, 10, 10, 280, 140);
            $('#stdimg').empty().html(`<img src='assets/imgs/${data.image}'>`); 
            $('input[type=hidden]').attr('value', data.image);
            $('#stdimg').attr('value',data.image)
          
            var x=document.activeElement.value;
        console.log(x);
           $('#studentId').val(data.std_id);
            $('#studentdate').val(data.Dob);
            $('#studentAdress').val(data.std_Adress);
            $('#RecommendedN').val(data.Relationship);
            /**check about value in data base */
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

            // $('#finput').val(data.$_FILES);

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

    /***********select the frist-row values in database by onclick$('.frist-row')  */
    $('.frist-row').click(function () {

        ////*** ajax request onload page edit_student */   
        $.ajax({
            url: "assets/php/students/frist-row.php",
            type: 'post',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                /**request sucess and given data */

               
                $('#studentName').val(data.value);
                $('#studentId').val(data.std_id);
                $('#studentdate').val(data.Dob);
                $('#studentAdress').val(data.std_Adress);
                $('#RecommendedN').val(data.Relationship);
                /**check about value in data base */
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

                // $('#finput').val(data.$_FILES);

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

    /***********select the next-row values in database by onclick$('.next-row')  */
    $('.next-row').click(function () {

        ////*** ajax request onload page edit_student */   
        $.ajax({
            url: "assets/php/students/next-row.php",
            type: 'post',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                /**request sucess and given data */

                $('#studentName').val(data.value);
                $('#studentId').val(data.std_id);
                $('#studentdate').val(data.Dob);
                $('#studentAdress').val(data.std_Adress);
                $('#RecommendedN').val(data.Relationship);
                /**check about value in data base */
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

                // $('#finput').val(data.$_FILES);

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
    $('.before-row').click(function () {

        ////*** ajax request onload page edit_student */   
        $.ajax({
            url: "assets/php/students/before-row.php",
            type: 'post',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                /**request sucess and given data */

                $('#studentName').val(data.value);
                $('#studentId').val(data.std_id);
                $('#studentdate').val(data.Dob);
                $('#studentAdress').val(data.std_Adress);
                $('#RecommendedN').val(data.Relationship);
                /**check about value in data base */
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

                // $('#finput').val(data.$_FILES);

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
    /***********select the last-row values in database by onclick$('.last-row')  */
    $('.last-row').click(function () {

        ////*** ajax request onload page edit_student */   
        $.ajax({
            url: "assets/php/students/last-row.php",
            type: 'post',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                /**request sucess and given data */
                $('#studentName').val(data.value);
                $('#studentId').val(data.std_id);
                $('#studentdate').val(data.Dob);
                $('#studentAdress').val(data.std_Adress);
                $('#RecommendedN').val(data.Relationship);
                /**check about value in data base */
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

                // $('#finput').val(data.$_FILES);

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
    /**check about std_custody and given value */
    var std_custody = $("#std_custody").val();
    if (std_custody == 'other') {
        $('#RecommendedName').prop('disabled', false);
        $('#RecommendedN').prop('disabled', false);

    }
    else {
        $('#RecommendedName').prop('disabled', true)
        $('#RecommendedN').prop('disabled', true);
        $('#RecommendedName').prop('value',);
        $('#RecommendedN').attr('value',);
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

});