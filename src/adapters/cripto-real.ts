import * as bscrypt from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts'
import ProvedorCripto from "../core/user/model/cripto-provider.ts";

export default class RealCripto implements ProvedorCripto {
  criptografar(senha: string): Promise<string> {
    return bscrypt.hash(senha)
  }
  comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
    return bscrypt.compare(senha, senhaCriptografada)
  }
}