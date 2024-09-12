import CasoDeUso from "../../shared/use-case.ts";
import ColecaoUsuario from "../data/user-collection.ts";
import Usuario from "../model/user.ts";

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
  async executar(usuario: Required<Usuario>): Promise<void> {
    const senhaCriptografada = usuario.senha.split('').reverse().join('')
    const usuarioCriptografado = { ...usuario, senha: senhaCriptografada }

    const colecao = new ColecaoUsuario()
    await colecao.adicionar(usuarioCriptografado)
  }
}