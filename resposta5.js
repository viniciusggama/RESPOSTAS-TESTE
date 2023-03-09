
/*esse algoritmo recebe uma palavra de no maximo 11 caractere,
armazena em um vetor, em seguida faz a exibição na ordem inversa usando 
usando o metodo charAt que é a meneira que eu sei*/



var palavra = prompt('');
for (var c=10; c>=0 ; c--){
    alert(palavra.charAt(c));
}