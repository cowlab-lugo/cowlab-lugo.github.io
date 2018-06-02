<?php

require '../vendor/autoload.php';

use Cowlab\Checker\Http;

$httpChecker = new \Cowlab\Checker\Http();

$urls = [
    'https://github.com/cowlab-lugo',
    'https://sond3.com',
    'https://nonexists.github.com/cowlab-lugo',
];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Cowlab-Checker</title>
    <style>
        a{ text-decoration: underline; color:#000;}
        span { position:relative; top: 1px; left: 2px; width: 12px; height: 12px; display: inline-block; border-radius: 50%;}
        .ok { background: green;}
        .fail { background: red;}
    </style>
</head>
<body>
    <ul>

        <?php foreach ($urls as $url) { ?>

            <li>
                <a href="<?php echo $url ?>"><?php echo $url ?></a>
                <span class="<?php echo ($httpChecker->check($url)) ? 'ok' : 'fail'?>"></span>
            </li>

        <?php }?>
    </ul>
</body>
</html>