import CasoDeUso from "../../shared/use-case.ts";
import ColecaoUsuario from "../data/user-collection.ts";
import Usuario from "../model/user.ts";

export type LoginUsuarioDTO = {
  email: string
  senha: string
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioDTO, Usuario | null> {
  async executar(dto: LoginUsuarioDTO): Promise<Usuario | null> {
    const colecao = new ColecaoUsuario()

    const usuario = await colecao.buscarPorEmail(dto.email)
    if(!usuario) return null

    const senhaCriptografada = dto.senha.split('').reverse().join('')
    if(usuario.senha !== senhaCriptografada) return null

    return {
      nome: usuario.nome,
      email: usuario.email
    }
  }
}