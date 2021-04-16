function valida_dados (nomeform)
{
    if (nomeform.nome.value=="")//valores em brancos
    {
        alert ("Por favor digite o nome.");
        return false;
    }
    if (nomeform.email.value=="" || nomeform.email.value.indexOf('@', 0) == -1 || nomeform.email.value.indexOf('.', 0) == -1)//Este m&#233;todo retorna -1 se o valor a ser pesquisado nunca ocorre
    {
        alert ("E-mail inv&#225;lido.");
        return false;
    }
    if (nomeform.estado.selectedIndex ==0)//se caso ele n&#227;o selecionar nenhum
    {
        alert ("Por favor selecione o estado.");
        return false;
    }
    if (nomeform.login.value.length<5 || nomeform.login.value.length>15)//verifica o comprimento da string 
    {
        alert ("O login deve conter entre 5 e 15 caracteres.");
        return false;
    }
    if (nomeform.login.value.indexOf(' ', 0) != -1)//retorna -1 se o valor a ser pesquisado nunca ocorre. Se for diferente de -1 significa que que ocorreu presen&#231;a de espa&#231;os em brancos    
    {
        alert ("O login n&#227;o pode conter espa&#231;os em branco.");
        return false;
    }
    if (nomeform.senha.value.length<5 || nomeform.senha.value.length>15)//verifica o comprimento da string
    {
        alert ("A senha deve conter entre 5 e 15 caracteres.");
        return false;
    }
    if (nomeform.senha.value.indexOf(' ', 0) != -1)//retorna -1 se o valor a ser pesquisado nunca ocorre. Se for diferente de -1 significa que que ocorreu presen&#231;a de espa&#231;os em brancos    
    {
        alert ("A senha n&#227;o pode conter espa&#231;os em branco.");
        return false;
    }
    if (nomeform.senha.value != nomeform.confirmacao.value)// confere as senhas 
    {
        alert ("Senhas n&#227;o conferem. Voc&#234; digitou duas senhas diferentes.");
        return false;
    }
return true;
}