## Importante
Para o maps carregar normalmente vá até
a pasta 'android\app\src\main\AndroidManifest.xml' exatamente na linha 30.

android:value=<KEY_API_GOOGLE_MAPS>

Substitua pela sua chave do google maps.

## Instalação

```bash
# Clonar repositório
$ git clone https://github.com/Demontie/fortbrasil-mobile.git

# Pasta do clone
$ cd fortbrasil-mobile

# Instalar dependências
$ yarn install

# Garantir que limpe
$ yarn start --reset-cache

# Execute a aplicação
$ yarn android
```
## Aviso
A aplicação foi testada na plataforma android.