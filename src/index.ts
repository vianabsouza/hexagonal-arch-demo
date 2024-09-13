import InverterCripto from "./adapters/cripto-inverter.ts";
import ColecaoUsuarioMemoria from "./core/user/data/user-collection-in-memory.ts";
import LoginUsuario from "./core/user/service/user-login.ts";
import RegistrarUsuario from "./core/user/service/user-registration.ts";

const provedorCripto = new InverterCripto();
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