import { z } from "zod"

// Определяем схему для нашей формы регистрации
export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Имя пользователя должно содержать минимум 3 символа")
      .max(20, "Имя пользователя не должно превышать 20 символов"),
    email: z
      .string()
      .min(1, "Email обязателен")
      .email("Некорректный email адрес"),

    password: z
      .string()
      .min(8, "Пароль должен содержать минимум 8 символов")
      .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
      .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру"),
    confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"], // путь к полю, к которому относится ошибка
  })

// Создаем тип на основе схемы
export type RegistrationFormData = z.infer<typeof registrationSchema>
