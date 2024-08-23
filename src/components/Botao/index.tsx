import React from "react";
import { Button } from "rsuite";

interface BotaoGenericoProps {
  children: React.ReactNode;
  onClick?: () => void;
  appearance?: "default" | "primary" | "link" | "subtle" | "ghost" | "ghost-primary" | "ghost-link" | "ghost-subtle";
}

export const Botao = ({children, onClick, appearance,...props}: BotaoGenericoProps) => {
  return <Button style={{width: 134, height: 40, backgroundColor:'blue', color: 'white', borderRadius:6, border:'1px solid #ccc'}} onClick={onClick}{...props}>{children}</Button>;
};
