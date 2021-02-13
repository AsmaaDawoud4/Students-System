$(document).ready(function () {
    //****************add-student js****************///
        $(".focuseout").focusout(function (event) {
            event.preventDefault();
            var std_id = $(this).val();
            var std_Dob = std_id.substring(-14, 7);
            var std_Dob = std_Dob.split("");
    
            if (std_Dob[0] == 2) {
                std_Dob[0] = '19'
    
            }
    
            else if (std_Dob[0] == 3) {
                std_Dob[0] = '20'
    
            }
            //-------------getting array of std_Dob-----------//
            std_Dob[0] = std_Dob[0] + std_Dob[1] + std_Dob[2];
            //delet 2 index from index 1
            std_Dob.splice(1, 2);
            std_Dob[1] = std_Dob[1] + std_Dob[2];
            std_Dob[3] = std_Dob[3] + std_Dob[4];
            std_Dob.splice(2, 1);
            std_Dob.pop();
            //  -----------------calculate_age---------//
            function calculate_age(std_Dob) {
                var diff_ms = Date.now() - std_Dob.getTime();
                var age_dt = new Date(diff_ms);
                return Math.abs(age_dt.getUTCFullYear() - 1970);
            }
            var age = calculate_age(new Date(std_Dob));
            age < 3 ? window.confirm("عمر الطالب اقل من 3 سنوات لا يمكن اضافنه") : "";
            document.getElementById("studentdate").value = std_Dob;
            
            //----------------getting array of std_Dob-----------//
            var std_sex = std_id.substring(13, 12);
            ///******check about gender male or female */
            if (std_sex == 0 || std_sex < 10) {
                var std_sex;
                if (std_sex = (std_sex % 2 == 0)) {
    
                    $('#fmale').prop('checked', true);
                }
    
                //if the number is odd
                else {
                    $('#male').prop('checked', true);
    
                }
    
    
            }
    
            // //check about std_Cbirth from national std_id
            var std_Cbirth = std_id.substring(9, 7);
    
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
            else{document.getElementById("studentCountybirth").value ="";}
        
        });
    
    /***check about std_custody disabled or not  */
    
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