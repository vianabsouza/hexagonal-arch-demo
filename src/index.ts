import InverterCripto from "./temp/cripto-inverter.ts";
import LoginUsuario from "./core/user/service/user-login.ts";
import RegistrarUsuario from "./core/user/service/user-registration.ts";

const provedorCripto = new InverterCripto();

// Registrar usuario
const registrar = new RegistrarUsuario(provedorCripto)
await registrar.executar({
    nome: 'Barbara',
    email: 'barbara@exemolo.com',
    senha: '123456',
})

// Login usuario
const login = new LoginUsuario(provedorCripto)
const usuario = await login.executar({
    email: 'barbara@exemolo.com',
    senha: '123456',
})

console.log(usuario)