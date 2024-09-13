import CasoDeUso from "../../shared/use-case.ts";
import ProvedorCripto from "../model/crypto-provider.ts";
import ColecaoUsuario from "../model/user-collection-repository.ts";
import Usuario from "../model/user.ts";

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
  constructor(
    private colecao: ColecaoUsuario,
    private provedorCripto: ProvedorCripto
  ) {}

  async executar(usuario: Required<Usuario>): Promise<void> {
    const senhaCriptografada = await this.provedorCripto.criptografar(usuario.senha)
    const usuarioCriptografado = { ...usuario, senha: senhaCriptografada }

    await this.colecao.adicionar(usuarioCriptografado)
  }
}