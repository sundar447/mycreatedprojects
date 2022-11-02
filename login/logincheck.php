<?php
if(!isset($_POST['submit']))
{
    $username=$_POST['Username'];
    $password=$_POST['Password'];
    $con=mysqli_connect("localhost:3307","root","","formdata");
    $sql="select * from login where Username='$username' and Password='$password'";
    $result=mysqli_query($con,$sql);
    $resultcheck=mysqli_num_rows($result);
    if($resultcheck>0){
        echo "Login Successful";
    }
    else{
        echo "Username or Password Incorrect";
    }
}
?>