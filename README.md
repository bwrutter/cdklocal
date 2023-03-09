# cdklocal
 Montagem padrão de um CDK Local com localstack
 
# Dependências
 Ter instalado: Docker Compose, Node, AWSCli, AWSCdk e cdklocal.
 
# Rodando
 Passo 1: Caso tenha as suas credenciais aws no .profile, podes comentar, não são necessarias localmente. <br>
 Passo 2: Entrar na pasta raiz do projeto e rodar um 'docker compose up' <br>
 Passo 3: No Terminal do VSCode com o projeto aberto, rodar um 'cdklocal bootstrap' e posteriormente 'cdk local deploy --all' <br>
 Passo 4: Conferir o endpoint que será mostrado nos logs e fazer um teste de requisição. 
 
