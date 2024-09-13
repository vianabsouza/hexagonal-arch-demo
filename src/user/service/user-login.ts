import CasoDeUso from "../../shared/use-case.ts";
import ColecaoUsuario from "../data/user-collection.ts";
import ProvedorCripto from "../model/cripto-provider.ts";
import Usuario from "../model/user.ts";

export type LoginUsuarioDTO = {
  email: string
  senha: string
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioDTO, Usuario | null> {
  constructor(private provedorCripto: ProvedorCripto) {}
  async executar(dto: LoginUsuarioDTO): Promise<Usuario | null> {
    const colecao = new ColecaoUsuario()

    const usuario = await colecao.buscarPorEmail(dto.email)
    if(!usuario || !usuario.senha) return null

    const senhaCompara = await this.provedorCripto.comparar(dto.senha, usuario.senha)

    if(!senhaCompara) return null

    return {
      nome: usuario.nome,
      email: usuario.email
    }
  }
}