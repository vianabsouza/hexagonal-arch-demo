import ProvedorCripto from "../core/user/model/crypto-provider.ts";

export default class InverterCripto implements ProvedorCripto {
  // deno-lint-ignore require-await
  async criptografar(senha: string): Promise<string> {
    return senha.split('').reverse().join('')
  }

  // deno-lint-ignore require-await
  async comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
    return senha.split('').reverse().join('') === senhaCriptografada
  }
}