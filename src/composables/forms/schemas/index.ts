import { z } from "zod";

export const email = z.string().min(1, "Preencha seu e-mail por favor");

export const name = z.string().min(1, "Preencha seu nome por favor");

export const phone = z
  .string()
  .min(1, "Campo obrigatório")
  .min(14, "Número de telefone inválido")
  .max(16, "Número de telefone inválido");

export const message = z.string().min(1, "Qual sua dúvida?")

export const form = z.object({
    email,
    name,
    phone,
    message
})