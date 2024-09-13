export default interface ProvedorCripto {
  criptografar(senha: string): Promise<string>
  comparar(senha: string, senhaCriptografada: string): Promise<boolean>
}