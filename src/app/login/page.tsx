"use client";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { Center } from "@/components/utils/Center";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
	return (
		<>
			<Brand />
			<Title>Entre na sua conta</Title>
			<Form>
				<Input placeholder="Email" />
				<Input placeholder="Senha" type="password" />
				<Center>
					<Button>Entrar</Button>
				</Center>
			</Form>
			<p>
				Não tem uma conta? <a href="/signup">Crie uma aqui</a>.
			</p>
		</>
	);
};

export default LoginPage;
