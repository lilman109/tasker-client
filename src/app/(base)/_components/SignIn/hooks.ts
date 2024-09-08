import { UserCredentialsType } from "@/entities/schema/user-credentials/types";
import { userCredentialsSchema } from "@/entities/schema/user-credentials/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

export const useSignInHooks = () => {
  const useFormMethods = useForm<UserCredentialsType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(userCredentialsSchema),
    mode: "onSubmit",
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useFormMethods;

  const { mutate: signin } = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const { username, password } = credentials;
      const res = await axios.post(process.env.USER_SIGNIN_URL!, {
        username,
        password,
      });
      return res.data;
    },
    onSuccess(data) {
      console.log("User signed in successfully");
    },
    onError(error) {
      console.error(error);
    },
  });

  const onSubmit = (data: UserCredentialsType) => {
    const { username, password } = data;
    signin({ username, password });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isValid,
    isSubmitting,
  };
};
