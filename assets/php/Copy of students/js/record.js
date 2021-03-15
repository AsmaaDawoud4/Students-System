////*** ajax request onload page edit_student */   
$(document).ready(function () {
    /**global variable */
    var std_id;
    var dTable = $('#table_absent').DataTable();
    var dTable_behavior = $('#table_behavior').DataTable();
    /** show table of student absent */
    function show_table_absent() {
        std_id = $(".focuseoutt").val();

        /** ajax request to get data from database */
        $.ajax({
            type: 'get',
            url: "assets/php/students/student_absent_table_show.php",
            dataType: 'json',
            data: { std_id: std_id },
            // processData: false,
            contentType: false,

            success: function (data) {

                $.each(data, (key, value) => {

                    dTable.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div> <input class="balloon" id="id" type="hidden" maxlength="50"value=${value[0]} name="id_absent" />
                        <input type="text" data-toggle="datepicker" value=${value[1]} name="std_absent" placeholder="تاريخ الغياب" autocomplete="off" /></div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" id="checkbox" name="ex" ${value[2] == 1 ? 'checked' : ''}/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg><span>بعذر</span> </span>`,
                        `<div class="input-group"><textarea name="note"  placeholder="ملاحظات">${value[3]}</textarea></div>`,
                        '<button class="btn btn-sm remove delet_absent">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  ',

                    ]).draw();
                })
                dTable.row.iDisplayLength = 1;


            },
            error: function (data) {
                console.log(data);

            },

        });

    }

    /** show table of student behavior */
    function show_table_behavior() {
        std_id = $(".focuseoutt").val();

        /** ajax request to get data from database */
        $.ajax({
            type: 'get',
            url: "assets/php/students/student_behavior_table_show.php",
            dataType: 'json',
            data: { std_id: std_id },
            // processData: false,
            contentType: false,

            success: function (data) {

                $.each(data, (key, value) => {

                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input class="balloon" id="id" type="hidden" maxlength="50"value=${value[0]} name="id_behavior" />
                    <input type="text" value=${value[1]}name="std_behavior"data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="violation"  id="" placeholder="المخالفة">${value[2]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="execution" id="" placeholder="الاجراء">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="note" id="" placeholder="ملاحظات">${value[4]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `
                    ]).draw();

                })
                dTable_behavior.row.iDisplayLength = 1;

            },
            error: function (data) {
                console.log(data);

            },

        });

    }
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
            url: "assets/php/students/student_record.php",
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
                $('#id').val(data.id);
                var img = new Image();
                img.src = `assets/imgs/${data.image}`;
                var myCanvas = document.getElementById('stdimg');
                var ctx = myCanvas.getContext("2d");
                ctx.drawImage(img, 10, 10, 280, 140);
                $('#stdimg').empty().html(`<img src='assets/imgs/${data.image}'>`);
                $('input[type=hidden]').attr('value', data.image);
                $('#stdimg').attr('value', data.image)

                var x = document.activeElement.value;
                console.log(x);
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

                show_table_absent();/**show table  function   */
                show_table_behavior();/**show table  function   */
            },
            error: function (data) {
                console.log(data);
            }
        });

    });

    //////student-record main informations**///
    $(".focuseoutt").focusout(function () {

        std_id = $(this).val();
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
                $('#id').val(data.id);
                var img = new Image();
                img.src = `assets/imgs/${data.image}`;
                var myCanvas = document.getElementById('stdimg');
                var ctx = myCanvas.getContext("2d");
                ctx.drawImage(img, 10, 10, 280, 140);
                $('#stdimg').empty().html(`<img src='assets/imgs/${data.image}'>`);
                $('input[type=hidden]').attr('value', data.image);
                $('#stdimg').attr('value', data.image)

                var x = document.activeElement.value;
                console.log(x);
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

                show_table_absent();/**show table  function   */
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

    /** add student pdf report  */
    $('.addstudentpdf').on('click', function () {
        var std_imge = new FormData();
        std_imge = $("[name=std_imge]").val();

        var std_name = $('[name=std_name]').val();
        var std_rlgn = $('[name=std_rlgn]').val();
        var std_Adress = $('[name=std_Adress]').val();
        var Relationship = $('[name=Relationship]').val();
        var std_lvl = $('[name=std_lvl]').val();
        var std_class = $('[name=std_class]').val();
        var std_stge = $('[name=std_stge]').val();
        var std_custody = $('[name=std_custody]').val();
        var R_Name = $('[name=R_Name]').val();
        var fath_name = $('[name=fath_name]').val();
        var moth_name = $('[name=moth_name]').val();
        var fath_id = $('[name=fath_id]').val();
        var moth_id = $('[name=moth_id]').val();
        var fath_tel = $('[name=fath_tel]').val();
        var moth_tel = $('[name=moth_tel]').val();
        var fath_job = $('[name=fath_job]').val();
        var moth_job = $('[name=moth_job]').val();
        var reg_N = $('[name=reg_N]').val();
        var std_std_sexn = $('[name=std_std_sexn]').val();
        std_id = $('[name=std_id]').val();
        std_Cbirth = document.getElementById("studentCountybirth").value;
        std_sex = $('[name=std_sex]').val();
        std_DOB = $('[name=std_DOB]').val();;

        $.ajax({
            url: "assets/php/students/student_session_pdf.php",
            type: 'post',
            data:
            {
                std_name: std_name,
                std_rlgn: std_rlgn,
                std_Adress: std_Adress,
                Relationship: Relationship,
                std_lvl: std_lvl,
                std_class: std_class,
                std_stge: std_stge,
                std_custody: std_custody,
                R_Name: R_Name,
                fath_name: fath_name,
                moth_name: moth_name,
                fath_id: fath_id,
                moth_id: moth_id,
                fath_tel: fath_tel,
                moth_tel: moth_tel,
                fath_job: fath_job,
                moth_job: moth_job,
                reg_N: reg_N,
                std_std_sexn: std_std_sexn,
                std_imge: std_imge,
                std_id: std_id,
                std_DOB: std_DOB,
                std_sex: std_sex,
                std_Cbirth: std_Cbirth,
                std_custody: std_custody,

            },
            success: function (data) {
                /**request sucess and given data */

                $.ajax({
                    url: "assets/php/students/studentpdf.php",
                    type: 'post',
                });
            },
            error: function (data) {
                console.log(data);
            }
        });

    });

    /** save std_absent */
    $('#table_absent').on('click', '.save_absent_behavior', function () {

        std_id = $("[name=std_id]").val();

        std_absent = $(this).closest('tr').children('td').find('[name=std_absent]').val();

        note = $(this).closest('tr').children('td').find('[name=note]').val();
        ex = $(this).closest('tr').children('td').find('input:checkbox').is(':checked') ? 1 : 0;


        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/student_record_absent.php",
            type: 'get',
            dataType: 'json',
            data: { 'std_id': std_id, std_absent: std_absent, note: note, ex: ex },

            success: function () {
                /** ajax request to get data from database */
                dTable.clear()
                show_table_absent();
            },
            error: function (data) {
                console.log(data);
            }
        })
    });
    /** edit std_absent */
    $('#table_absent').on('click', '.edit_absent', function () {

        var id_absent = $(this).closest('tr').children('td').find("[name=id_absent]").val();

        std_absent = $(this).closest('tr').children('td').find('[name=std_absent]').val();

        note = $(this).closest('tr').children('td').find('[name=note]').val();
        ex = $('input:checkbox').is(':checked') ? 1 : 0;
        dTable.clear()
        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/edit_absent.php",
            type: 'get',
            dataType: 'json',
            data: { 'id_absent': id_absent, std_absent: std_absent, note: note, ex: ex },

            success: function () {
                /** ajax request to get data from database */
                show_table_absent()
            },
            error: function (data) {
                console.log(data);
            }
        })
    });
    /**  delet absent*/

    $('#table_absent ').on('click', '.delet_absent', function () {
        /** ajax request to get data from database */
        var id_absent = $(this).closest('tr').children('td').find("[name=id_absent]").val();
        dTable.clear();/**clear all data */

        $.ajax({
            type: 'get',
            url: "assets/php/students/delet_absent.php",
            dataType: 'json',
            data: { 'id_absent': id_absent },
            // processData: false,
            contentType: false,

            success: function (data) {
                show_table_absent();
            },
            error: function (data) {
                console.log(data);

            },

        });
    })
    /****************behavior table *********************/

    /** save std_behavior */
    $('#table_behavior').on('click', '.save_behavior', function () {

        std_id = $("[name=std_id]").val();

        var std_behavior = $(this).closest('tr').children('td').find('[name=std_behavior]').val();

        var note = $(this).closest('tr').children('td').find('[name=note]').val();

        var execution = $(this).closest('tr').children('td').find('[name=execution]').val();

        var violation = $(this).closest('tr').children('td').find('[name=violation]').val();


        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/student_record_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'std_id': std_id, std_behavior: std_behavior, note: note, violation: violation, execution: execution },

            success: function () {
                /** ajax request to get data from database */
                show_table_behavior()
            },
            error: function (data) {
                console.log(data);
            }
        })
    });
    /** edit std_behavior */
    $('#table_behavior').on('click', '.edit_behavior', function () {

        var id_behavior = $(this).closest('tr').children('td').find("[name=id_behavior]").val();

        var std_behavior = $(this).closest('tr').children('td').find('[name=std_behavior]').val();

        var note = $(this).closest('tr').children('td').find('[name=note]').val();

        var execution = $(this).closest('tr').children('td').find('[name=execution]').val();

        var violation = $(this).closest('tr').children('td').find('[name=violation]').val();

        dTable_behavior.clear()
        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/edit_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'id_behavior': id_behavior, std_behavior: std_behavior, note: note, violation: violation, execution: execution },

            success: function () {
                /** ajax request to get data from database */
                show_table_behavior()
            },
            error: function (data) {
                console.log(data);
            }
        })
    });

    /**  delet behavior*/

    $('#table_behavior ').on('click', '.delet_behavior', function () {
        /** ajax request to get data from database */
        var id_behavior = $(this).closest('tr').children('td').find("[name=id_behavior]").val();

        dTable_behavior.clear()
        $.ajax({
            type: 'get',
            url: "assets/php/students/delet_behavior.php",
            dataType: 'json',
            data: { 'id_behavior': id_behavior },
            // processData: false,
            contentType: false,

            success: function (data) {
                show_table_behavior()
            },
            error: function (data) {
                console.log(data);

            },

        });
    })


})
