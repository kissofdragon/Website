function prtflo(id, visibility) {
$('#portfolio').fadeIn(600);
$('#active').hide();
$('#keyoffer').hide();
document.getElementById(id).style.display = visibility;
}

function activities(id, visibility){
	$('#active').fadeIn(600);
	$('#portfolio').hide();
	$('#keyoffer').hide();
	document.getElementById(id).style.display = visibility;	
}

function keyofferfun(id, visibility){

	$('#keyoffer').fadeIn(600);
	$('#active').hide();
$('#portfolio').hide();

document.getElementById(id).style.display = visibility;	

	}
	
	function othernav()
	{
		$('#portfolio').hide();
			$('#active').hide();
			$('#keyoffer').hide();
		}