$(document).ready(function () {
    
    $('.addteacher').on( 'click',function () {
        
        var teacher_pic = new FormData();
        var file = $("[name=teacher_pic]")[0].files[0];
        teacher_pic=file.name;
      
        
        var teacher_name= $('[name=teacher_name]').val(); 
        var teacher_DOB= $('[name=teacher_DOB]').val();
        var teacher_adress= $('[name=teacher_adress]').val();
        var teacher_classes= $('[name=teacher_classes]').val();
        var teacher_phone1= $('[name=teacher_phone1]').val();
        var teacher_phone2= $('[name=teacher_phone2]').val();
        var teacher_Social= $('[name=teacher_Social]').val();
        var teacher_job= $('[name=teacher_job]').val();
        var teacher_StartDate= $('[name=teacher_StartDate]').val();
        var teacher_Experince= $('[name=teacher_Experince]').val();
        
        var teacher_sexn=$('[name=teacher_sexn]').val();

       
        $.ajax({
            url: "assets/php/teachers/teacher_session_pdf.php",
            type: 'post',
         
            data:
            {
                teacher_name:teacher_name,
                teacher_DOB :teacher_DOB.toString(),
                teacher_adress :teacher_adress,
                teacher_classes:teacher_classes,
                teacher_phone1:teacher_phone1,
                teacher_phone2:teacher_phone2,
                teacher_Social:teacher_Social,
                teacher_job:teacher_job,
                teacher_StartDate:teacher_StartDate.toString(),
                teacher_Experince:teacher_Experince,
                   teacher_pic:teacher_pic,
                teacher_sexn:teacher_sexn
            },
       // contentType: false,
      //  processData: false,
            success: function (data) {
                /**request sucess and given data */
                $.ajax({
                    url: "assets/php/teachers/teacherpdf.php",
                    type: 'post',});
             } ,
            error: function (data) {
                console.log(data);
            }
        });

    
    





     });

    
})