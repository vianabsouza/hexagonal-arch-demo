import RealCripto from "./adapters/crypto-real.ts";
import ColecaoUsuarioMemoria from "./adapters/user-collection-in-memory.ts";
import LoginUsuario from "./core/user/service/user-login.ts";
import RegistrarUsuario from "./core/user/service/user-registration.ts";

const provedorCripto = new RealCripto();
const colecaoUsuario = new ColecaoUsuarioMemoria();

// Registrar usuario
const registrar = new RegistrarUsuario(colecaoUsuario, provedorCripto)
await registrar.executar({
    nome: 'Barbara',
    email: 'barbara@exemolo.com',
    senha: '123456',
})

// Login usuario
const login = new LoginUsuario(colecaoUsuario, provedorCripto)
const usuario = await login.executar({
    email: 'barbara@exemolo.com',
    senha: '123456',
})

console.log(usuario)