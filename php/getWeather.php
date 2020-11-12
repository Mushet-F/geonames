<?php

	$executionStartTime = microtime(true) / 1000;
	
    // $url = 'http://api.geonames.org/weatherJSON?formatted=true&north=' . $_REQUEST['north'] . '&south=' . $_REQUEST['south'] . '&east=' . $_REQUEST['east'] .'&west=' . $_REQUEST['west']  . '&username=mushetf&style=full';
    $url = 'http://api.geonames.org/weatherJSON?formatted=true&north=52.5&south=52.1&east=14.2&west=12.3&username=mushetf&style=full';


	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

    $decode = json_decode($result,true);
    // print_r($decode);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>