import useRegistrationHook from "../hooks/useRegistrationHook";

const RegisterForm = () => {

  const {register, handleSubmit, formState: {errors}, onSubmit, loading} = useRegistrationHook();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}
      <br/>
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <button type="submit">
        Login {loading && '...'}
      </button>

    </form>
  );
}

export default RegisterForm
