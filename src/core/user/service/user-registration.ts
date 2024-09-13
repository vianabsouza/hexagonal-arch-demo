import CasoDeUso from "../../../shared/use-case.ts"
import ColecaoUsuario from "../data/user-collection.ts";
import ProvedorCripto from "../model/cripto-provider.ts";
import Usuario from "../model/user.ts";

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
  constructor(private provedorCripto: ProvedorCripto) {}

  async executar(usuario: Required<Usuario>): Promise<void> {
    const senhaCriptografada = await this.provedorCripto.criptografar(usuario.senha)
    const usuarioCriptografado = { ...usuario, senha: senhaCriptografada }

    const colecao = new ColecaoUsuario()
    await colecao.adicionar(usuarioCriptografado)
  }
}