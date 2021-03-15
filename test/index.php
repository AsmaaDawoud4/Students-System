Expand ▼   Copy Code<?php
	$imgFolder = 'img/';
	$imgNames = array( '2stars.png', 'close.png', 'navbar2.png' );
	$numImages = count($imgNames);
?>
<!DOCTYPE html>
<html>
<head>
<script>
function myOnInit()
{
	var numImages = <?php echo $numImages; ?>;
	var i, imgNames = [];
	<?php 
		echo "imgNames[] = [";
		echo "imgNames = [";
		for ($i=0; $i<$numImages; $i++)
		{
			if ($i != 0) echo ", ";
			echo "'$imgFolder$imgNames[$i]'";
		}
		echo "];\n"
	?>
	
	for (i=0; i<numImages; i++)
	{
		img = document.createElement('img');
		img.src = imgNames[i];
		img.setAttribute('width', '440');
		img.setAttribute('height', '500');
		document.body.appendChild(img);
	}
}
</script>
</head>
<body onload='myOnInit();'>
</body>
</html>