import { useState } from "react"

export const RegistrationForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [confirmTouched, setConfirmTouched] = useState(false)

  const [emailError, setEmailError] = useState("Email is required")
  const [passwordError, setPasswordError] = useState("Password is required")
  const [confirmError, setConfirmError] = useState("Passwords do not match")

  const emailHandler = (event) => {
    setEmail(event.target.value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (event) => {
    setPasswordError(event.target.value)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{3,10}$/
    if (!passwordRegex.test(String(event.target.value))) {
      setPasswordError(
        "Password must be between 3 and 10 characters and contain at least one uppercase letter and one number"
      )
    }
  }
  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailTouched(true)
        break
      case "password":
        setPasswordTouched(true)
        break
      case "confirm-password":
        setConfirmTouched(true)
        break
    }
  }

  return (
    <div className="registration-container mx-auto flex flex-col items-center">
      <form action="" className="mt-10">
        <h1>Registration</h1>
        {emailTouched && emailError && (
          <div className="text-red-500">{emailError}</div>
        )}
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="block mt-2.5 border rounded-md px-4 py-2"
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => emailHandler(event)}
        />
        {passwordTouched && passwordError && (
          <div className="text-red-500">{passwordError}</div>
        )}
        <input
          type="password"
          name="password"
          placeholder="Create password"
          className="block mt-2.5 border rounded-md px-4 py-2"
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => passwordHandler(event)}
        />
        {confirmTouched && confirmError && (
          <div className="text-red-500">{confirmError}</div>
        )}
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
          className="block mt-2.5 border rounded-md px-4 py-2"
          onBlur={(event) => blurHandler(event)}
        />
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}
