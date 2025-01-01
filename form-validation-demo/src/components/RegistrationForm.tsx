import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  registrationSchema,
  RegistrationFormData,
} from "../shared/validation/schemas"

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = (data: RegistrationFormData) => {
    // В реальном приложении здесь был бы запрос к API
    console.log("Form data:", data)
  }

  // Общий стиль для инпутов
  const inputStyle =
    "w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
  // Стиль для сообщений об ошибках
  const errorStyle = "text-red-500 text-sm mt-1"

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 space-y-4"
    >
      <div>
        <input
          type="text"
          placeholder="Имя пользователя"
          {...register("username")}
          className={inputStyle}
        />
        {errors.username && (
          <p className={errorStyle}>{errors.username.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={inputStyle}
        />
        {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Пароль"
          {...register("password")}
          className={inputStyle}
        />
        {errors.password && (
          <p className={errorStyle}>{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Подтвердите пароль"
          {...register("confirmPassword")}
          className={inputStyle}
        />
        {errors.confirmPassword && (
          <p className={errorStyle}>{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegistrationForm
