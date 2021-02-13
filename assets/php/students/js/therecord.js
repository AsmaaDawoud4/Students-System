
$(document).ready(function () {
    ////*** ajax request onload page edit_student */   
    $.ajax({
        url: "assets/php/students/therecord.php",
        type: 'post',
        dataType: 'json',
        // contentType: false,
        processData: false,
        success: function (data) {
            $('tbody').html(data.std_absent_data);
        },
        error: function (data) {
            console.log(data);
        }
    });
 
      
    $('.data_column').change(function() {
       
        var values = [];
        var span_name=[];
        {
          $('.data_column :checked').each(function() {
            //if(values.indexOf($(this).val()) === -1){
            values.push($(this).attr('name'));
            span_name.push($(this).attr('value'));
            // }
          });
          
          elements = values.join(',')
          span_name=span_name.join(',')
          console.log (span_name+values)
          $.post('assets/php/students/therecorddd.php', {elements: elements,span_name:span_name},)

         }
      });
    
});