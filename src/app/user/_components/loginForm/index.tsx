import ButtonComponent from "@/_components/button";
import InputComponent from "@/_components/input";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const USER_LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginFromComponent = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(USER_LOGIN);

  const onClickSubmit = async (data) => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    console.log(`result: ${JSON.stringify(result)}`);
    // ! 콘솔에 제대로 찍어보니 loginUser 안에 accessToken 존재. => 기존에 token 값 null 문제 해결
    localStorage.setItem("accessToken", result.data.loginUser.accessToken);
    router.push("/");
  };

  return (
    <form
      className="flex flex-col items-center gap-5"
      onSubmit={handleSubmit(onClickSubmit)}
    >
      <InputComponent
        type="text"
        value="이메일"
        className=""
        placeholder="이메일을 입력해주세요."
        {...register("email")}
      />
      <InputComponent
        type="password"
        value="비밀번호"
        className=""
        placeholder="비밀번호를 입력해주세요."
        {...register("password")}
      />
      <ButtonComponent type="submit" value={"로그인"} className="" />
    </form>
  );
};

export default LoginFromComponent;
