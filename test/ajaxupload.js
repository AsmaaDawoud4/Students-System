function FeedPost() {
  $('#FeedResults').show();
  document.getElementById('FeedResults').innerHTML = '<center><img src="img/Loading.gif" title="Loading" /></center>';    
  var post_text = document.getElementById('PostText').value;
  var file = document.getElementById('PostImage').files[0];


  // you just add this
  var formData = new FormData();
  formData.append('file', file); // append file to your form


  var file_name = file.name;
  var file_size = file.size;
  var file_type = file.type;
  var dataString = 'feed='+post_text+'&img_name='+file_name+'&img_size='+file_size+'&img_type='+file_type;
      $.ajax({
      type: "GET",
      url: "post_feed.php?"+dataString,
      data: formData, // add this to your parameters in your ajax request
      dataType: "json",   
      success: function(data) {
      for (var i in data) {
          var entry = data[i]; 
          var success = entry.results.success;
          var message = entry.results.message;
      }
      document.getElementById('FeedResults').innerHTML = '<div class="ResultsText">'+message+'</div>';
  }
});        
}   