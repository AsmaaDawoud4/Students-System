

/**search input */
$("#search").keyup(function () {
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

                    document.getElementById('search').value = $(this).text();

                    $(".result").attr("hidden", true);
                })



            }

        });

});
/**search value */
$('.search').on('click', function () {
    var std_name = document.getElementById('search').value;
    
    /**select data values from db by giving std_name */
    $.ajax({
        url: "assets/php/students/search_pay-fees.php",
        type: 'get',
        dataType: 'json',
        data: { 'std_name': std_name },
        contentType: false,
        // processData: false,
        success: function (data) {
            $('[name=id]').text(data.id);
            /** getting respect table  values*/
             /** ajax request to get data from database */
             $.ajax({
                type: 'get',
                url: "assets/php/students/respect_table.php",
                dataType: 'json',
                data: { id: data.id },
                // processData: false,
                contentType: false,
                
                success: function (data) {
                    $('#std_respect_tr').html(data);
                 
                   
                },
                error: function (data) {
                    //console.log(data);
      
                }
            });
            
            $('[name=fath_name]').text(data.fath_name);
            $('[name=fath_id]').text(data.fath_id);
            $('[name=std_lvl]').text(data.std_lvl);
            $('[name=std_class]').text(data.std_class);
            $('[name=moth_name]').text(data.moth_name);
            $('[name=moth_id]').text(data.moth_id);
            $('[name=std_imge]').empty().html(` <img style=" display: block;margin-top:30px; margin-left: auto; margin-right: auto;width:70%;"  src='assets/imgs/${data.image}'>`); 
            $('[name=std_imge]').attr('value',data.image)
            $("[name=std_name]").text(data.value);
           
        },

    });
    $('#table').on('click','save_respect',function(){
        var rec_date=  $('[name=rec-date]').val(); 
        var rec_total =  $('[name=rec-total]').val();
        var rec_remain=  $('[name=rec-remain]').val(); 
        var id= $('[name=id]').text();
        $.ajax({
            url: "assets/php/students/respect.php",
            type: 'get',
            dataType: 'json',
            data: {id:id, rec_remain:rec_remain,rec_total:rec_total,rec_date:rec_date},
            contentType: false,
            // processData: false,
            success: function (data) {
               
                $.ajax({
                    type: 'get',
                    url: "assets/php/students/respect_table.php",
                    dataType: 'json',
                    data: { id:data.id },
                    // processData: false,
                    contentType: false,
                    
                    success: function (data) {
                        $('#std_respect_tr').html(data);
                     
                       
                    },
                    error: function (data) {
                        //console.log(data);
          
                    }
                });
                
            },
    
        });
    })
    /***edit button */
    $('#table').on('click','.edit_respect',function(){

        var rec_date=  $('[name=rec-date]').val(); 
        var rec_total =  $('[name=rec-total]').val();
        var rec_remain=  $('[name=rec-remain]').val(); 
        var id= $('[name=id]').text();
        console.log(id+'\n'+rec_date+'\n'+rec_remain+'\n'+rec_total)
        $.ajax({
            url: "assets/php/students/respect_edit.php",
            type: 'get',
            dataType: 'json',
            data: {id:id, rec_remain:rec_remain,rec_total:rec_total,rec_date:rec_date},
            contentType: false,
            // processData: false,
            success: function (data) {
               console.log("suc")
                // $.ajax({
                //     type: 'get',
                //     url: "assets/php/students/respect_table.php",
                //     dataType: 'json',
                //     data: { id: data.id },
                //     // processData: false,
                //     contentType: false,
                    
                //     success: function (data) {
                //         $('#std_respect_tr').html(data);
                     
                       
                //     },
                //     error: function (data) {
                //         //console.log(data);
          
                //     }
                // });
                
            },
    
        });
    })

});
