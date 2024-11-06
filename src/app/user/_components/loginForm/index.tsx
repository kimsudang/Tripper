import InputComponent from "@/_components/input";

const LoginFromComponent = () => {
  return (
    <form className="flex flex-col items-center gap-5">
      <InputComponent
        value="이메일"
        className=""
        placeholder="이메일을 입력해주세요."
      />
      <InputComponent
        value="비밀번호"
        className=""
        placeholder="비밀번호를 입력해주세요."
      />
    </form>
  );
};

export default LoginFromComponent;
