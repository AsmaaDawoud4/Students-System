$(document).ready(function () {


    var dTable_teacher = $('.record-table').DataTable();
    var dTable_behavior = $('.behavior-table').DataTable();

    /**search input */
    $("#student_date").keyup(function () {
        $(".result").attr("hidden", false);
        var x = $(this).val();
        $.ajax(
            {
                type: 'post',
                url: 'assets/php/teachers/loaddata.php',
                data: 'q=' + x,
                success: function (data) {
                    $(".result").html(data);

                    $("a").on('click', function () {

                        $(".result").attr("hidden", true);
                    })
                }

            });

    });
    /**search value */
    $('.search').on('click', function () {
        $(".result").attr("hidden", true);
        var teacher_name = document.getElementById('student_date').value;
        dTable_teacher.clear();/** clear table from any data */
        dTable_behavior.clear();
        /**select data values from db by giving id_teacher */
        $.ajax({
            url: "assets/php/teachers/search.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name },
            contentType: false,
            // processData: false,
            success: function (data) {

                show_table_absent()
                show_table_behavior()
            },
            error: function (data) {
                console.log(data);
            }
        });


    });
    /** save teacher_absent */
    $('#teacher_absent').on('click', '.save_absent_teacher', function () {

        teacher_name = document.getElementById('student_date').value;
        execusee = $(this).closest('tr').children('td').find('[name=execusee]').val();
        teacher_absent = $(this).closest('tr').children('td').find('[name=teacher_absent]').val();
        absent_obtion = $(this).closest('tr').children('td').find('[name=absent_obtion]').val();
        notes = $(this).closest('tr').children('td').find('[name=notes]').val();
        ex = $(this).closest('tr').children('td').find('input:checkbox').is(':checked') ? 1 : 0;
        dTable_teacher.clear();/**clear all data */

        /**select data values from db by giving teacher_id */
        $.ajax({
            url: "assets/php/teachers/teacher_absent.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name, teacher_absent: teacher_absent, notes: notes, ex: ex, execusee: execusee, absent_obtion: absent_obtion },

            success: function () {
                /** ajax request to get data from database */
                show_table_absent()
            },
            error: function (data) {
                console.log(data);
            }
        })
    });
    /** edit teacher_absent */
    $('#teacher_absent').on('click', '.edit_absent', function () {

        var id_teacher = $(this).closest('tr').children('td').find("[name=id_teacher]").val();

        execusee = $(this).closest('tr').children('td').find('[name=execusee]').val();
        teacher_absent = $(this).closest('tr').children('td').find('[name=teacher_absent]').val();
        absent_obtion = $(this).closest('tr').children('td').find('[name=absent_obtion ]').val() ;
        console.log(absent_obtion)

        notes = $(this).closest('tr').children('td').find('[name=notes]').val();
        ex = $(this).closest('tr').children('td').find('input:checkbox').is(':checked') ? 1 : 0;
        dTable_teacher.clear();/**clear all data */

     
        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/teachers/edit_absent.php",
            type: 'get',
            dataType: 'json',
            data: { 'id_teacher': id_teacher, teacher_absent: teacher_absent, notes: notes, ex: ex, execusee: execusee, absent_obtion: absent_obtion },


            success: function () {
                /** ajax request to get data from database */
                show_table_absent()
            },
            error: function (data) {
                console.log(data);
            }
        })
    });

    /** show table of teacher absent */
    function show_table_absent() {
        var teacher_name = document.getElementById('student_date').value;
        /** ajax request to get data from database */
        $.ajax({
            type: 'get',
            url: "assets/php/teachers/teacher_absent_table_show.php",
            dataType: 'json',
            data: { teacher_name: teacher_name },
            // processData: false,
            contentType: false,

            success: function (data) {

                $.each(data, (key, value) => {
                    dTable_teacher.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                        <input type="hidden"value=${value[0]} name="id_teacher"><input type="text" data-toggle="datepicker" value=${value[3]} name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>`,
                        `<select  name="absent_obtion"><option style="display: none;"> اختر</option><option value="0" ${value[1] == 0 ? 'selected' : ''}>تأخير  </option><option value= "1" ${value[1] == 1 ? 'selected' : ''}>غياب  </option></select>`,
                        `<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير"  value="${value[4]}"  /> </div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" value="${value[5]}"${value[5] == 1 ? 'checked' : ''} name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[2]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  `
                    ]).draw();
                    $('.next_row').attr('disabled', true)
                    $('.before_row').attr('disabled', true)
                })
                dTable_teacher.row.iDisplayLength = 1;

            },
            error: function (data) {
                console.log(data);

            },

        });

    }
    /**  delet absent*/

    $('#teacher_absent ').on('click', '.delet_teacher', function () {
        /** ajax request to get data from database */
        var id_teacher = $(this).closest('tr').children('td').find("[name=id_teacher]").val();
        /** clear table from any data */
        dTable_teacher.clear();
        $.ajax({
            type: 'get',
            url: "assets/php/teachers/delet_absent.php",
            dataType: 'json',
            data: { 'id_teacher': id_teacher },
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

    /** add teacher pdf report  */
    $('.pdf_report').on('click', function () {

        var teacher_name = document.getElementById('student_date').value;


        $.ajax({
            url: "assets/php/teachers/teacher_pdf.php",
            type: 'post',
            data:
                { 'teacher_name': teacher_name },
            success: function (data) {
                /**request sucess and given data */


            },
            error: function (data) {
                console.log(data);
            }
        });

    });
    /***********select the frist-row values in database by onclick$('.frist-row')  */
    $('.frist_row').click(function () {
        var teacher_name = document.getElementById('student_date').value;

        console.log(teacher_name)

        $.ajax({
            url: "assets/php/teachers/frist-row.php",
            type: 'get',
            data: { 'teacher_name': teacher_name },
            dataType: 'json',
            contentType: false,
            // processData: false,
            success: function (data) {
                dTable_teacher.clear().draw();
                /**request sucess and given data */
                $.each(data, (key, value) => {


                    dTable_teacher.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input type="hidden"value=${value[0]} name="id_teacher"><input type="text" data-toggle="datepicker" value=${value[3]} name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>`,
                        `<select  name="absent_obtion"><option style="display: none;"> اختر</option><option ${value[1] == 0 ? 'selected' : ''}>تأخير  </option><option ${value[1] == 1 ? 'selected' : ''}>غياب  </option></select>`,
                        `<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير"  value="${value[4]}"  /> </div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" value="${value[5]}"${value[5] == 1 ? 'checked' : ''} name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[2]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  `
                    ]).draw();
                })
                $('.next_row').attr('disabled', false)
                   
               
            },
            error: function (data) {
                console.log(data);
            }
        });

    });

    /***********select the next-row values in database by onclick$('.next-row')  */

    $('.next_row').click(function () {
        var teacher_name = document.getElementById('student_date').value;

        $.ajax({
            url: "assets/php/teachers/next-row.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name },
            contentType: false,
            //processData: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_teacher.clear().draw();
                $.each(data, (key, value) => {

                    dTable_teacher.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input type="hidden" value=${value[0]} name="id_teacher"><input type="text" data-toggle="datepicker" value=${value[3]} name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>`,
                        `<select  name="absent_obtion"><option style="display: none;"> اختر</option><option ${value[1] == 0 ? 'selected' : ''}>تأخير  </option><option ${value[1] == 1 ? 'selected' : ''}>غياب  </option></select>`,
                        `<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير"  value="${value[4]}"  /> </div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" value="${value[5]}"${value[5] == 1 ? 'checked' : ''} name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[2]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  `
                    ]).draw();

                })
               
                $('.before_row').attr('disabled', false)
           

            },
            error: function (data) {
                console.log(data);
            }

        });

    });
    /***********select the before-row values in database by onclick$('.before-row')  */
    $('.before_row').click(function () {
        var teacher_name = document.getElementById('student_date').value;
        $.ajax({
            url: "assets/php/teachers/before_row.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name, },
            contentType: false,
            //processData: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_teacher.clear().draw();
                $.each(data, (key, value) => {
                    dTable_teacher.clear().draw();
                    dTable_teacher.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input type="hidden"value=${value[0]} name="id_teacher"><input type="text" data-toggle="datepicker" value=${value[3]} name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>`,
                        `<select  name="absent_obtion"><option style="display: none;"> اختر</option><option ${value[1] == 0 ? 'selected' : ''}>تأخير  </option><option ${value[1] == 1 ? 'selected' : ''}>غياب  </option></select>`,
                        `<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير"  value="${value[4]}"  /> </div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" value="${value[5]}"${value[5] == 1 ? 'checked' : ''} name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[2]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  `
                    ]).draw();
                })
                $('.next_row').attr('disabled', false)
               
           

            },
            error: function (data) {
                console.log(data);
            }
        });

    });
    /***********select the last-row values in database by onclick$('.last-row')  */
    $('.last_row').click(function () {
        var teacher_name = document.getElementById('student_date').value;


        $.ajax({
            url: "assets/php/teachers/last-row.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name },
            contentType: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_teacher.clear().draw();
                $.each(data, (key, value) => {

                    dTable_teacher.row.add([
                        `<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input type="hidden"value=${value[0]} name="id_teacher"><input type="text" data-toggle="datepicker" value=${value[3]} name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>`,
                        `<select  name="absent_obtion"><option style="display: none;"> اختر</option><option ${value[1] == 0 ? 'selected' : ''}>تأخير  </option><option ${value[1] == 1 ? 'selected' : ''}>غياب  </option></select>`,
                        `<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير"  value="${value[4]}"  /> </div>`,
                        `<span class="custom-checkbox bounce"><input type="checkbox" value="${value[5]}"${value[5] == 1 ? 'checked' : ''} name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[2]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button>  `
                    ]).draw();
                })
              
                $('.before_row').attr('disabled', false)
           

            },
            error: function (data) {
                console.log(data);
            }
        });

    });



    /***************behavior_table */

    /** show table of teacher behavior */
    function show_table_behavior() {
        var teacher_name = document.getElementById('student_date').value;
        /** ajax request to get data from database */
        $.ajax({
            type: 'get',
            url: "assets/php/teachers/teacher_behavior_table_show.php",
            dataType: 'json',
            data: { teacher_name: teacher_name },
            // processData: false,
            contentType: false,

            success: function (data) {

                $.each(data, (key, value) => {
                    console.log(value)
                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                    <input name="behavior_id" hidden type="text" value=${value[0]} >  <input name="teacher_behavior" value=${value[2]} type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك ">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[1]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `

                    ]).draw();

                })
                dTable_behavior.row.iDisplayLength = 1;
                $('.next_row_behavior').attr('disabled', true)
                $('.before_row_behavior').attr('disabled', true)
            },
            error: function (data) {
                console.log(data);

            },

        });

    }

    /** save teacher_behavior */
    $('#teacher_behavior').on('click', '.save_behavior', function () {

        teacher_name = document.getElementById('student_date').value;

        teacher_behavior = $(this).closest('tr').children('td').find('[name=teacher_behavior]').val();
        behavior_type = $(this).closest('tr').children('td').find('[name=behavior_type]').val();
        notes = $(this).closest('tr').children('td').find('[name=notes]').val();
        /** clear table from any data */
        dTable_behavior.clear();
        /**select data values from db by giving teacher_name */
        $.ajax({
            url: "assets/php/teachers/teacher_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name, teacher_behavior: teacher_behavior, notes: notes, behavior_type: behavior_type },

            success: function () {
                /** ajax request to get data from database */
                show_table_behavior();
            },
            error: function (data) {
                console.log(data);
            }
        })
    });

    /** edit teacher_behavior */
    $('#teacher_behavior').on('click', '.edit_behavior', function () {

        var behavior_id = $(this).closest('tr').children('td').find("[name=behavior_id]").val();
        teacher_behavior = $(this).closest('tr').children('td').find('[name=teacher_behavior]').val();
        behavior_type = $(this).closest('tr').children('td').find('[name=behavior_type]').val();
        notes = $(this).closest('tr').children('td').find('[name=notes]').val();
        /** clear table from any data */
        dTable_behavior.clear();
        /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/teachers/edit_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'behavior_id': behavior_id, teacher_behavior: teacher_behavior, notes: notes, behavior_type: behavior_type },


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

    $('#teacher_behavior ').on('click', '.delet_behavior', function () {
        /** ajax request to get data from database */
        var behavior_id = $(this).closest('tr').children('td').find("[name=behavior_id]").val();
        /** clear table from any data */
        dTable_behavior.clear();
        $.ajax({
            type: 'get',
            url: "assets/php/teachers/delet_behavior.php",
            dataType: 'json',
            data: { 'behavior_id': behavior_id },
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
    /** add behavior pdf report  */
    $('.pdf_behavior').on('click', function () {

        var teacher_name = document.getElementById('student_date').value;


        $.ajax({
            url: "assets/php/teachers/behavior_pdf.php",
            type: 'post',
            data:
                { 'teacher_name': teacher_name },
            success: function (data) {
                /**request sucess and given data */


            },
            error: function (data) {
                console.log(data);
            }
        });

    });
    /***********select the frist-row values in database by onclick$('.frist-row')  */
    $('.frist_row_behavior').click(function () {
        var teacher_name = document.getElementById('student_date').value;



        $.ajax({
            url: "assets/php/teachers/frist-row_behavior.php",
            type: 'get',
            data: { 'teacher_name': teacher_name },
            dataType: 'json',
            contentType: false,
            // processData: false,
            success: function (data) {
                dTable_behavior.clear().draw();
                /**request sucess and given data */
                $.each(data, (key, value) => {

                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                        <input name="behavior_id" hidden type="text" value=${value[0]} >  <input name="teacher_behavior" value=${value[2]} type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك ">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[1]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `

                    ]).draw();
                    $('.next_row_behavior').attr('disabled', false)

                })
            },
            error: function (data) {
                console.log(data);
            }
        });

    });

    /***********select the next-row values in database by onclick$('.next-row')  */

    $('.next_row_behavior').click(function () {
        var teacher_name = document.getElementById('student_date').value;

        $.ajax({
            url: "assets/php/teachers/next-row_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name, },
            contentType: false,
            //processData: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_behavior.clear().draw();
                $.each(data, (key, value) => {

                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                        <input name="behavior_id" hidden type="text" value=${value[0]} >  <input name="teacher_behavior" value=${value[2]} type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك ">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[1]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `

                    ]).draw();

                    $('.before_row_behavior').attr('disabled', false)

                })


            },
            error: function (data) {
                console.log(data);
            }

        });

    });
    /***********select the before-row values in database by onclick$('.before-row')  */
    $('.before_row_behavior').click(function () {
        var teacher_name = document.getElementById('student_date').value;
        $.ajax({
            url: "assets/php/teachers/before_row_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name, 'before': true },
            contentType: false,
            //processData: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_teacher.clear().draw();
                $.each(data, (key, value) => {
                    dTable_behavior.clear().draw();
                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                        <input name="behavior_id" hidden type="text" value=${value[0]} >  <input name="teacher_behavior" value=${value[2]} type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك ">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[1]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `

                    ]).draw();
                    $('.next_row_behavior').attr('disabled', false)
                })


            },
            error: function (data) {
                console.log(data);
            }
        });

    });
    /***********select the last-row values in database by onclick$('.last-row')  */
    $('.last_row_behavior').click(function () {
        var teacher_name = document.getElementById('student_date').value;


        $.ajax({
            url: "assets/php/teachers/last-row_behavior.php",
            type: 'get',
            dataType: 'json',
            data: { 'teacher_name': teacher_name },
            contentType: false,
            success: function (data) {
                /**request sucess and given data */
                dTable_behavior.clear().draw();
                $.each(data, (key, value) => {

                    dTable_behavior.row.add([
                        ` <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                        <input name="behavior_id" hidden type="text" value=${value[0]} >  <input name="teacher_behavior" value=${value[2]} type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>`,
                        ` <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك ">${value[3]}</textarea></div>`,
                        ` <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات">${value[1]}</textarea></div>`,
                        `<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> `

                    ]).draw();
                })


                $('.before_row_behavior').attr('disabled', false)

            },
            error: function (data) {
                console.log(data);
            }
        });

    });



})