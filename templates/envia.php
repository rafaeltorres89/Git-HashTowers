<?php

// Aqui ficam os dados do formulário que serão enviados!!!

$nome = $_POST["nome"];//Campo Nome do Formulário
$email = $_POST["email"];//Campo E-mail do Formulário
// $assunto_msg = $_POST["assunto_msg"];//Campo Mensagem do Formulário
$contato = $_POST["contato"];//Campo Contato do Formulário

// Aqui ficam os dados do seu e-mail e da autoresposta!!!

$assunto = "Formulário"; //Assunto do e-mail q vai chegar na sua caixa de mensagem
$mail = "hello@hashtowers.com"; //E-mail que você gostaria de receber os resultados do formulário
$assunto_auto = "$nome, recebemos sua mensagem com sucesso!";//Assunto da Auto Resposta
$website =  "HashTowers Brasil";//Nome do Website
$url_website = "www.hashtowers.com";//Url do Website
$nome_webmaster = "Equipe";//Nome do Webmaster do site
$mensagem_auto = "Olá $nome!\n\nObrigado por entrar em contato conosco!\nO mais breve possível estaremos respondendo sua mensagem!!!\n\n$nome_webmaster $website\n$url_website";
//$assunto_auto = "Recebemos sua mensagem";

// Aqui você observa os dados que serão enviados!!!

$mensagem = "$assunto enviado por $nome no $website:\n\n";//Inicio da Mensagem enviada!
$mensagem .= "Nome: $nome\n";//Nome do Contato
$mensagem .= "E-mail: $email\n";//Nome do Contato
// $mensagem .= "Assunto: $assunto_msg\n";//Assunto do Contato
$mensagem .= "Assunto: Contato pelo site!\n";//Assunto do Contato
$mensagem .= "Mensagem: \n$contato";//Mensagem Enviada do Contato

//não modifique esta linha, pois é ela que envia a mensagem!!!
@mail($mail, $assunto, $mensagem, "From: $email");

//não modifique esta linha, pois é ela que envia a auto_resposta!!!
@mail($email, $assunto_auto, $mensagem_auto, "From: $mail");

// header("Location:./ok/");

?>