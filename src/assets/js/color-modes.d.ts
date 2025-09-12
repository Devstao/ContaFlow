/**
 * Define os tipos para o módulo de alternância de modos de cor.
 *
 * Fornece funções para obter, definir e alternar temas de cor (claro, escuro, auto)
 * utilizando armazenamento local e preferências do sistema.
 */

/**
 * Obtém o tema armazenado no localStorage.
 *
 * @returns {string | null} O tema armazenado ou null se não definido.
 */
export function getStoredTheme(): string | null;

/**
 * Define o tema no localStorage.
 *
 * @param theme O tema a ser armazenado ("light", "dark" ou "auto").
 */
export function setStoredTheme(theme: string): void;

/**
 * Obtém o tema preferido do usuário.
 *
 * @returns {string} O tema preferido ("light" ou "dark").
 */
export function getPreferredTheme(): string;

/**
 * Define o tema atual do documento.
 *
 * @param theme O tema a ser aplicado ("light", "dark" ou "auto").
 */
export function setTheme(theme: string): void;

/**
 * Atualiza a interface para refletir o tema ativo.
 *
 * @param theme O tema ativo ("light", "dark" ou "auto").
 * @param focus Se true, foca no seletor de tema.
 */
export function showActiveTheme(theme: string, focus?: boolean): void;
