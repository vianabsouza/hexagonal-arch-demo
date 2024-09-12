import LoginUsuario from "./user/service/user-login.ts";
import RegistrarUsuario from "./user/service/user-registration.ts";

// Registrar usuario
const registrar = new RegistrarUsuario()
await registrar.executar({
    nome: 'Barbara',
    email: 'barbara@exemolo.com',
    senha: '123456',
})

// Login usuario
const login = new LoginUsuario()
const usuario = await login.executar({
    email: 'barbara@exemolo.com',
    senha: '123456',
})

console.log(usuario)