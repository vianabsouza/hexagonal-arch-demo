import Usuario from "../model/user.ts";

export default class ColecaoUsuario {
  static readonly usuarios: Usuario[] = []

  // deno-lint-ignore require-await
  async adicionar(usuario: Usuario): Promise<void> {
    ColecaoUsuario.usuarios.push(usuario)
  }

 // deno-lint-ignore require-await
 async buscarPorEmail(email: string): Promise<Usuario | null> {
    return ColecaoUsuario.usuarios.find(usuario => usuario.email === email) ?? null
  }
}