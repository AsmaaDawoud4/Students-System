$(document).ready(function () {
    //****************add-student js****************///
    /** global variables */
    var std_id;
    var std_DOB;
    var std_sex;
    var std_Cbirth;
    var std_custody;
     
   

    $(".focuseout").focusout(function (event) {
        event.preventDefault();
        std_id = $(this).val();
        std_DOB = std_id.substring(-14, 7);
        std_DOB = std_DOB.split("");

        if (std_DOB[0] == 2) {
            std_DOB[0] = '19'

        }

        else if (std_DOB[0] == 3) {
            std_DOB[0] = '20'

        }
        //-------------getting array of std_DOB-----------//
        std_DOB[0] = std_DOB[0] + std_DOB[1] + std_DOB[2];
        //delet 2 index from index 1
        std_DOB.splice(1, 2);
        std_DOB[1] = std_DOB[1] + std_DOB[2];
        std_DOB[3] = std_DOB[3] + std_DOB[4];
        std_DOB.splice(2, 1);
        std_DOB.pop();
        //  -----------------calculate_age---------//
        function calculate_age(std_DOB) {
            var diff_ms = Date.now() - std_DOB.getTime();
            var age_dt = new Date(diff_ms);
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
        var age = calculate_age(new Date(std_DOB));
        age < 3 ? window.confirm("عمر الطالب اقل من 3 سنوات لا يمكن اضافنه") : "";
        document.getElementById("studentdate").value = std_DOB;

        //----------------getting array of std_DOB-----------//
        std_sex = std_id.substring(13, 12);
        ///******check about gender male or female */
        if (std_sex == 0 || std_sex < 10) {
           
            if (std_sex = (std_sex % 2 == 0)) {

                $('#fmale').prop('checked', true);
            }

            //if the number is odd
            else {
                $('#male').prop('checked', true);

            }


        }

        // //check about std_Cbirth from national std_id
        std_Cbirth = std_id.substring(9, 7);

        if (std_Cbirth == "01") { document.getElementById("studentCountybirth").value = "القاهرة"; }
        else if (std_Cbirth == "02") { document.getElementById("studentCountybirth").value = "الإسكندرية"; }
        else if (std_Cbirth == "03") { document.getElementById("studentCountybirth").value = "بورسعيد"; }
        else if (std_Cbirth == "04") { document.getElementById("studentCountybirth").value = "السويس"; }
        else if (std_Cbirth == "11") { document.getElementById("studentCountybirth").value = "دمياط"; }
        else if (std_Cbirth == "12") { document.getElementById("studentCountybirth").value = "الدقهلية"; }
        else if (std_Cbirth == "13") { document.getElementById("studentCountybirth").value = "الشرقية"; }
        else if (std_Cbirth == "14") { document.getElementById("studentCountybirth").value = "القليوبية"; }
        else if (std_Cbirth == "15") { document.getElementById("studentCountybirth").value = "كفر الشيخ"; }
        else if (std_Cbirth == "16") { document.getElementById("studentCountybirth").value = "الغربية"; }
        else if (std_Cbirth == "17") { document.getElementById("studentCountybirth").value = "المنوفية"; }
        else if (std_Cbirth == "18") { document.getElementById("studentCountybirth").value = "البحيرة"; }
        else if (std_Cbirth == "19") { document.getElementById("studentCountybirth").value = "الإسماعيلية"; }
        else if (std_Cbirth == "21") { document.getElementById("studentCountybirth").value = "	الجيزة"; }
        else if (std_Cbirth == "22") { document.getElementById("studentCountybirth").value = "	بنى سويف"; }
        else if (std_Cbirth == "23") { document.getElementById("studentCountybirth").value = "	الفيوم"; }
        else if (std_Cbirth == "24") { document.getElementById("studentCountybirth").value = "	المنيا"; }
        else if (std_Cbirth == "25") { document.getElementById("studentCountybirth").value = "	أسيوط"; }
        else if (std_Cbirth == "26") { document.getElementById("studentCountybirth").value = "	سوهاج"; }
        else if (std_Cbirth == "27") { document.getElementById("studentCountybirth").value = "	قنا"; }
        else if (std_Cbirth == "28") { document.getElementById("studentCountybirth").value = "	أسوان"; }
        else if (std_Cbirth == "29") { document.getElementById("studentCountybirth").value = "	الأقصر"; }
        else if (std_Cbirth == "31") { document.getElementById("studentCountybirth").value = "	البحر الأحمر"; }
        else if (std_Cbirth == "32") { document.getElementById("studentCountybirth").value = "	الوادى الجديد"; }
        else if (std_Cbirth == "33") { document.getElementById("studentCountybirth").value = "	مطروح"; }
        else if (std_Cbirth == "34") { document.getElementById("studentCountybirth").value = "	شمال سيناء"; }
        else if (std_Cbirth == "35") { document.getElementById("studentCountybirth").value = "	جنوب سيناء"; }
        else if (std_Cbirth == "88") { document.getElementById("studentCountybirth").value = "	خارج الجمهوريه"; }
        else { document.getElementById("studentCountybirth").value = ""; }

    });

    /***check about std_custody disabled or not  */

    $("#std_custody").focusout(function myFunction() {
        std_custody = $(this).val();

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
    $('.addstudentpdf').on( 'click',function () {
        var std_imge = new FormData();
        var file = $("[name=std_imge]")[0].files[0];
        std_imge=file.name;
      
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
       
        std_Cbirth=document.getElementById("studentCountybirth").value;
        std_sex=$('[name=std_sex]').val();
           std_DOB=std_DOB.toString();
           
        $.ajax({
            url: "assets/php/students/student_session_pdf.php",
            type: 'post',
            data:
            {
                std_name:std_name,
                std_rlgn:std_rlgn,
                std_Adress :std_Adress,
                Relationship:Relationship,
                std_lvl:std_lvl,
                std_class:std_class,
                std_stge:std_stge,
                std_custody:std_custody,
                R_Name:R_Name,
                fath_name:fath_name,
                moth_name:moth_name,
                fath_id:fath_id,
                moth_id:moth_id,
                fath_tel:fath_tel,
                moth_tel:moth_tel,
                fath_job:fath_job,
                moth_job:moth_job,
                reg_N:reg_N,
                std_std_sexn:std_std_sexn,
                std_imge :std_imge,
                std_id:std_id,
                 std_DOB:std_DOB,
                  std_sex:std_sex,
                 std_Cbirth:std_Cbirth,
                std_custody:std_custody,
                
            },
            success: function (data) {
                /**request sucess and given data */

                $.ajax({
                    url: "assets/php/students/studentpdf.php",
                    type: 'post',});
            },
            error: function (data) {
                console.log(data);
            }
        });








    });





});