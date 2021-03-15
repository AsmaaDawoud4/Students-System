$(function () {

    // Start show mega-drop-down in mobile
    if ($(window).width() <= 992) {
        $(".mega-drop-down a").on('click', function () {
            $(this).next('.mega-menu').slideToggle();
        });
        $(".toggle-menu").click(function () {
            $(this).toggleClass("active");
            $('.navbar-menu').toggleClass("open");
        });
    }
    //user-menu-wrap
    document.querySelector('#user-photo').addEventListener('click', function () {
        document.querySelector('.menu-container').classList.toggle('active');
    });

    //datepicker
    $('[data-toggle="datepicker"]').datepicker({
        format: 'yyyy-mm-dd',

    });
    //student-album slider
    var swiper = new Swiper('.student-album .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


});

// Start upload image
function upload() {
    var imgcanvas = document.getElementById("stdimg");
    var file = document.getElementById("finput");
    var image = new SimpleImage(file);
    image.drawTo(imgcanvas);
}


function twoDigYear(yy) {
    yy = Number(yy);
    if (yy < 100) {
        if (yy > 20) {
            yy = yy + 1900
        } else {
            yy = yy + 2000
        }
    }
    return yy;
}
// age calculator

function initializeDates() {
    var tmpToday = new Date();
    document.forms["calculator"].elements["testMonth"].value = tmpToday.getMonth() + 1;
    document.forms["calculator"].elements["testDay"].value = tmpToday.getDate();
    document.forms["calculator"].elements["testYear"].value = tmpToday.getFullYear();

    //	document.forms["calculator"].elements["bornMonth"].value = 5;
    //	document.forms["calculator"].elements["bornDay"].value = 12;
    //	document.forms["calculator"].elements["bornYear"].value = 2005;
    //
    //	document.forms["calculator"].elements["testMonth"].value = 2;
    //	document.forms["calculator"].elements["testDay"].value = 21;
    //	document.forms["calculator"].elements["testYear"].value = 2009;
}

function daysInMonth(month, year) {
    var dd = new Date(year, month, 0);
    return dd.getDate();
}

function calcage() {
    strBirthMonth = Number(document.forms["calculator"].elements["bornMonth"].value);
    strBirthDay = Number(document.forms["calculator"].elements["bornDay"].value);
    strBirthYear = twoDigYear(document.forms["calculator"].elements["bornYear"].value);
    strTestMonth = Number(document.forms["calculator"].elements["testMonth"].value);
    strTestDay = Number(document.forms["calculator"].elements["testDay"].value);
    strTestYear = twoDigYear(document.forms["calculator"].elements["testYear"].value);

    var strBirthDate = strBirthMonth + "/" + strBirthDay + "/" + strBirthYear;
    var strTestDate = strTestMonth + "/" + strTestDay + "/" + strTestYear;

    if (isDate(strBirthDate, "تاريخ الميلاد:") && isDate(strTestDate, "تاريخ اليوم:")) {

        var tmpBornDate = new Date(strBirthYear, strBirthMonth - 1, strBirthDay);
        var tmpTestDate = new Date(strTestYear, strTestMonth - 1, Number(strTestDay));
        var intDifYears = (strTestMonth < strBirthMonth) ? strTestYear - strBirthYear - 1 : strTestYear -
            strBirthYear;
        var intDifMonths = (strTestMonth < strBirthMonth) ? (12 - strBirthMonth) + strTestMonth : strTestMonth -
            strBirthMonth;

        // convention is to use 30 day months rather than real number of days
        // if that should change, adjust comments below

        // comment out below for 30 day months
        // var intDifDays = (strTestDay < strBirthDay) ? daysInMonth(strBirthMonth,strBirthYear) - strBirthDay + strTestDay : strTestDay - strBirthDay;
        // This should use true days in month
        var intDifDays = (strTestDay < strBirthDay) ? 30 - strBirthDay + strTestDay : strTestDay - strBirthDay;

        //borrow months and years
        var intDifMonths = (strTestDay < strBirthDay) ? intDifMonths - 1 : intDifMonths;
        if (intDifMonths < 0) {
            intDifMonths = 11;
            intDifYears = intDifYears - 1;
        }

        if (intDifYears < 0) {
            alert("يجب أن يكون تاريخ الميلاد قبل تاريخ اليوم");
            return false;
        }

        var strYears = "";
        var strDays = intDifDays;
        var strMonths = intDifMonths;
        var strYears = intDifYears;
        if (document.forms["calculator"].elements["name"].value != "") {
            document.forms["calculator"].elements["Age"].value = document.forms["calculator"].elements["name"]
                .value + " is " + strYears + " سنة, " + strMonths + " شهر,  " + strDays +
                "يوم.";
        } else {
            document.forms["calculator"].elements["Age"].value = strYears + " سنة, " + strMonths +
                " شهر,  " + strDays + " يوم.";

        }
    }
}

function isDate(dateStr, outStr) {

    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var matchArray = dateStr.match(datePat); // is the format ok?

    if (matchArray == null) {
        alert(outStr + " الرجاء ادخال التاريخ .");
        return false;
    }

    month = matchArray[1]; // p@rse date into variables
    day = matchArray[3];
    year = matchArray[5];

<<<<<<< HEAD
$(document).ready(function () {
  var table = $('.dataTables-material').DataTable({
    "scrollY": "200px",
    "paging": true,
    "scrollX": true,
    "oLanguage": {
      "sSearch": "بحث",
      "sNext": "التالى",
      "sPrevious": "السابق",
      "scrollCollapse": true,
=======
    if (month < 1 || month > 12) { // check month range
        alert(outStr + " يجب أن يكون الشهر بين 1 و 12.");
        return false;
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225
    }

    if (day < 1 || day > 31) {
        alert(outStr + " يجب أن يكون اليوم بين 1 و 31.");
        return false;
    }

    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        alert(outStr + " شهر " + month + " ليس لديها 31 يوما!")
        return false;
    }

    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            alert(outStr + " فبراير " + year + " ليس لديها " + day + " يوم!");
            return false;
        }
    }

    return true; // date is valid
}

$(document).ready(function () {
<<<<<<< HEAD
  

  var recordTable = $('.record-table').DataTable({
    "ordering": false,
  });

  $('#addDay').on('click', function () {

    
    
    recordTable.row.add([
      ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker"  name="std_absent" placeholder="تاريخ الغياب" autocomplete="off" /></div>',
      '<span class="custom-checkbox bounce"><input type="checkbox" id="checkbox" name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg><span>بعذر</span> </span>',
      '<div class="input-group"><textarea name="note"  placeholder="ملاحظات"></textarea></div>',
      '<button class="btn btn-sm remove delet_absent">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button> <button  class="btn btn-sm edit save_absent_behavior">حفظ </button>'
    ]).draw(false);


    $('[data-toggle="datepicker"]').datepicker({
      format: 'yyyy-mm-dd',
=======
    var table = $('.dataTables-material').dataTable({
        "scrollY": "200px",
        "paging": true,
        "scrollX": true,
        "oLanguage": {
            "sSearch": "بحث",
            "sNext": "التالى",
            "sPrevious": "السابق",
            "scrollCollapse": true,
        }
    });

    $('.toggle-vis').on('click', function () {
        // e.preventDefault();

        // Get the column API object
        var column = table.column($(this).attr('data-column'));
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225

        // Toggle the visibility
        column.visible(!column.visible());
    });
<<<<<<< HEAD
   
  });




  

  // Automatically add a first row of data
  // $('#addDay').click();
  $('#addteacher').on('click', function () {
    recordTable.row.add([
      '<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker"name="teacher_absent" placeholder="تاريخ " autocomplete="off" /></div>',
      '<select name="absent_obtion"><option style="display: none;"> اختر</option><option value="0">تأخير  </option><option value="1">غياب  </option></select>',
      '<div class="input-group"><input name="execusee" type="text" placeholder="مقدار التاخير" /> </div>',
      '<span class="custom-checkbox bounce"><input type="checkbox" name="ex"/><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>',
      ' <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات"></textarea></div>',
      '<button class="btn btn-sm remove delet_teacher">حذف</button> <button class="btn btn-sm edit edit_absent">تعديل</button> <button  class="btn btn-sm edit save_absent_teacher">حفظ </button>  '
    ]).draw(false);
    $('[data-toggle="datepicker"]').datepicker({
      format: 'yyyy-mm-dd',
=======

});

$(document).ready(function () {
    var recordTable = $('.record-table').DataTable({
        "ordering": false,
    });


    $('#addDay').on('click', function () {
        recordTable.row.add([
            ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker" placeholder="تاريخ الغياب" autocomplete="off" /></div>',

            '<span class="custom-checkbox bounce"><input type="checkbox" /><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg><span>بعذر</span> </span>',
            ' <div class="input-group"><textarea name="" id="" placeholder="ملاحظات"></textarea></div>',
            '<button class="btn btn-sm remove">حذف</button> <button class="btn btn-sm edit">تعديل</button>  <button class="btn btn-sm edit add_absent">اضافه</button>'
        ]).draw(false);
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd',
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225

        });

    });
    $('.add_absent').on('click', function () {

<<<<<<< HEAD
  $('#addBehaviorTeacher').on('click', function () {
    behaviorTable.row.add([
      ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input name="teacher_behavior" type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>',
      ' <div class="input-group"><textarea name="behavior_type" id="" placeholder="نوع السلوك "></textarea></div>',
      ' <div class="input-group"><textarea name="notes" id="" placeholder="ملاحظات"></textarea></div>',
      '<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit">تعديل</button> <button class="btn btn-sm edit save_behavior">حفظ</button>'
    ]).draw(false);
    $('[data-toggle="datepicker"]').datepicker({
      format: 'yyyy-mm-dd',
=======
        var std_id = $(".focuseoutt").val();
        var std_absent = $('#std_absent').val();
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225

        var note = $('#note').val();
        var ex = $('#ex').val();

        // /**select data values from db by giving std_id */
        $.ajax({
            url: "assets/php/students/student_record2.php",
            type: 'get',
            dataType: 'json',
            data: { 'std_id': std_id, std_absent: std_absent, note: note, ex: ex },
            contentType: false,
            // processData: false,

<<<<<<< HEAD
  // Automatically add a first row of data
  //$('#addBehavior').click();
=======
        })
    })

    // Automatically add a first row of data
    $('#addDay').click();
    $('#addteacher').on('click', function () {
        recordTable.row.add([
            '<div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker" placeholder="تاريخ " autocomplete="off" /></div>',
            '<select><option style="display: none;"> اختر</option><option>تأخير  </option><option>غياب  </option></select>',
            '<div class="input-group"><input  type="text" placeholder="مقدار التاخير" /> </div>',
            '<span class="custom-checkbox bounce"><input type="checkbox" /><svg viewBox="0 0 21 21"> <polyline points="5 10.75 8.5 14.25 16 6"></polyline> </svg> </span>',
            ' <div class="input-group"><textarea name="" id="" placeholder="ملاحظات"></textarea></div>',
            '<button class="btn btn-sm remove">حذف</button> <button class="btn btn-sm edit">تعديل</button>  <button class="btn btn-sm edit add_absent">اضافه</button>'
        ]).draw(false);
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd',

        });

    });
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225


    $('#addBehaviorTeacher').on('click', function () {
        behaviorTable.row.add([
            ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>',
            ' <div class="input-group"><textarea name="" id="" placeholder="نوع السلوك "></textarea></div>',
            ' <div class="input-group"><textarea name="" id="" placeholder="ملاحظات"></textarea></div>',
            '<button class="btn btn-sm remove">حذف</button> <button class="btn btn-sm edit">تعديل</button>'
        ]).draw(false);
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd',

<<<<<<< HEAD
  $('#addBehavior').on('click', function () {
    behaviorTable.row.add([
      ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" name="std_behavior"data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>',
      ' <div class="input-group"><textarea name="violation" id="" placeholder="المخالفة"></textarea></div>',
      ' <div class="input-group"><textarea name="execution" id="" placeholder="الاجراء"></textarea></div>',
      ' <div class="input-group"><textarea name="note" id="" placeholder="ملاحظات"></textarea></div>',
      '<button class="btn btn-sm remove delet_behavior">حذف</button> <button class="btn btn-sm edit edit_behavior">تعديل</button> <button  class="btn btn-sm edit save_behavior">حفظ </button> '
    ]).draw(false);
    $('[data-toggle="datepicker"]').datepicker({
      format: 'yyyy-mm-dd',
=======
        });
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225

    });

    // Automatically add a first row of data
    $('#addBehavior').click();

<<<<<<< HEAD
  // Automatically add a first row of data
 //$('#addBehavior').click();
=======
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225

    // Automatically add a first row of data
    $('#addDay').click();

    var behaviorTable = $('.behavior-table').DataTable({
        "ordering": false,
    });


    $('#addBehavior').on('click', function () {
        behaviorTable.row.add([
            ' <div class="input-group"> <div class="inputgroup-icon"> <i class="fa fa-calendar" aria-hidden="true"></i></div><input type="text" data-toggle="datepicker" placeholder="تاريخ السلوك" autocomplete="off" /></div>',
            ' <div class="input-group"><textarea name="" id="" placeholder="المخالفة"></textarea></div>',
            ' <div class="input-group"><textarea name="" id="" placeholder="الاجراء"></textarea></div>',
            ' <div class="input-group"><textarea name="" id="" placeholder="ملاحظات"></textarea></div>',
            '<button class="btn btn-sm remove">حذف</button> <button class="btn btn-sm edit">تعديل</button>  <button class="btn btn-sm edit add_absent">اضافه</button>'
        ]).draw(false);
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd',

        });

    });

    // Automatically add a first row of data
    $('#addBehavior').click();



});


(function ($) {
    var CheckboxDropdown = function (el) {
        var _this = this;
        this.isOpen = false;
        this.areAllChecked = false;
        this.$el = $(el);
        this.$label = this.$el.find('.dropdown-label');
        this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
        this.$inputs = this.$el.find('[type="checkbox"]');

        this.onCheckBox();

        this.$label.on('click', function (e) {
            e.preventDefault();
            _this.toggleOpen();
        });

        this.$checkAll.on('click', function (e) {
            e.preventDefault();
            _this.onCheckAll();
        });

        this.$inputs.on('change', function (e) {
            _this.onCheckBox();
        });
    };

    CheckboxDropdown.prototype.onCheckBox = function () {
        this.updateStatus();
    };

    CheckboxDropdown.prototype.updateStatus = function () {
        var checked = this.$el.find(':checked');

        this.areAllChecked = false;
        this.$checkAll.html('تحديد الكل');

        if (checked.length <= 0) {
            this.$label.html('أختار');
        }

        else if (checked.length === this.$inputs.length) {
            this.$label.html('تم تحديد الكل');
            this.areAllChecked = true;
            this.$checkAll.html('Uncheck All');
        }
        else {
            this.$label.html(checked.length + ' اتحدد');
        }
    };

    CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
        if (!this.areAllChecked || checkAll) {
            this.areAllChecked = true;
            this.$checkAll.html('Uncheck All');
            this.$inputs.prop('checked', true);
        }
        else {
            this.areAllChecked = false;
            this.$checkAll.html('Check All');
            this.$inputs.prop('checked', false);
        }

        this.updateStatus();
    };

    CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
        var _this = this;

        if (!this.isOpen || forceOpen) {
            this.isOpen = true;
            this.$el.addClass('on');
            $(document).on('click', function (e) {
                if (!$(e.target).closest('[data-control]').length) {
                    _this.toggleOpen();
                }
            });
        }
        else {
            this.isOpen = false;
            this.$el.removeClass('on');
            $(document).off('click');
        }
    };

    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
    for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
        new CheckboxDropdown(checkboxesDropdowns[i]);
    }
})(jQuery);