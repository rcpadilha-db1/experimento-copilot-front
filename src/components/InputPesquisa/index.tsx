import { Input, InputProps } from "rsuite";

interface SearchInputProps extends InputProps {
  text: string;
}

export const InputPesquisa = ({ text }: SearchInputProps) => {
  return <Input placeholder={text} size="lg" htmlSize={40} />;
};
