"use client";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import { FormContainer } from "@/components/FormContainer";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { Center } from "@/components/containers/Center";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
	return (
		<>
			<Brand />
			<Title>Entre na sua conta</Title>
			<FormContainer>
				<Input placeholder="Email" />
				<Input placeholder="Senha" type="password" />
				<Center>
					<Button>Entrar</Button>
				</Center>
			</FormContainer>
			<p>
				Não tem uma conta? <a>Crie uma aqui</a>.
			</p>
		</>
	);
};

export default LoginPage;
