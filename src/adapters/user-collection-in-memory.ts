import ColecaoUsuario from "../core/user/model/user-collection-repository.ts";
import Usuario from "../core/user/model/user.ts";

export default class ColecaoUsuarioMemoria implements ColecaoUsuario{
  static readonly usuarios: Usuario[] = []

  // deno-lint-ignore require-await
  async adicionar(usuario: Usuario): Promise<void> {
    ColecaoUsuarioMemoria.usuarios.push(usuario)
  }

 // deno-lint-ignore require-await
 async buscarPorEmail(email: string): Promise<Usuario | null> {
    return ColecaoUsuarioMemoria.usuarios.find(usuario => usuario.email === email) ?? null
  }
}