<?php

require_once('connect.php');

if ($conn->query("DELETE FROM `blog` WHERE `id` = {$_GET['id']};")) {
  header('location: ./');
}
