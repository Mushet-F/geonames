<?php

	$api_url='http://api.geonames.org/neighboursJSON?formatted=true&geonameId=' . $_REQUEST['country'] .'&username=mushetf&style=full';

	$json_data = file_get_contents($api_url);

	$response_data = json_decode($json_data, true);

	$result['status']['code'] = "200";
	$result['status']['name'] = "ok";
	$result['data'] = $response_data['geonames'];

	echo json_encode($result);

?>
