"use client";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { FormContainer } from "@/components/FormContainer";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { Center } from "@/components/containers/Center";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
	return (
		<>
			<Brand />
			<Title>Crie sua conta</Title>
			<FormContainer>
				<Input required min={3} placeholder="Name" type="text" />
				<Input required min={5} placeholder="Email" type="email" />
				<Input required min={5} placeholder="Senha" type="password" />
				<Input
					required
					min={5}
					placeholder="Confirmar senha"
					type="password"
				/>

				<CheckBox>
					<p>
						Concordo com os
						<a href="http://?"> termos de uso e privacidade</a>.
					</p>
				</CheckBox>
				<Center>
					<Button>Registrar-se</Button>
				</Center>
			</FormContainer>
			<p>
				Já possui uma conta? <a>Faça login aqui</a>.
			</p>
		</>
	);
};

export default LoginPage;
