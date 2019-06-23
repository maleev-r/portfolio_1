<?php require __DIR__.'/header.php';
define('PROTECT_VAR',"ok");
$db_host = 'localhost';
$db_user = 'opencart';
$db_password = 'opencart';
$db_name = 'admin_panel';
$db_link = new mysqli($db_host,$db_user,$db_password,$db_name);

if($_POST['ajax']){
    $VAR['asda'] ='asdasd';
    $VAR['data'] = 'border';
    echo json_encode($VAR);
}
require __DIR__.'/include/menu.php';
?>

<div class="container-fluid h-100">
    <pre><?php print_r($db_link);?></pre>



</div>
<div class="card-footer fixed-bottom">
    <div class="row justify-content-between align-items-center">
        <div class="col-6" id="log-area">
            Loading.....
        </div>
        <div class="col-4">

        </div>
        <div class="col-2 text-right card p-2">
            <div class="alert-heading">Copy files:</div>
            <div class="progress shadow">
                <div class="progress-bar" style="width: 60%">60%</div>
            </div>
        </div>
    </div>
</div>

<?php require __DIR__.'/footer.php';?>



