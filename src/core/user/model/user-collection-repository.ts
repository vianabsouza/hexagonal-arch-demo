import Usuario from "../model/user.ts";

export default interface ColecaoUsuario {
  adicionar(usuario: Usuario): Promise<void>
  buscarPorEmail(email: string): Promise<Usuario | null>
}