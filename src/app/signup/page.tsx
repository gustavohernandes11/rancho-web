"use client";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { Center } from "@/components/utils/Center";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
	return (
		<>
			<Brand />
			<Title>Crie sua conta</Title>
			<Form>
				<Input required min={3} placeholder="Name" type="text" />
				<Input required min={5} placeholder="Email" type="email" />

				<Input
					required
					min={5}
					placeholder="Senha"
					messageOnFocus="Utilize de 5 a 12 caracteres, com símbolos, letras maiúscula e
				números."
					type="password"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,12}$"
				/>
				<Input
					required
					min={5}
					placeholder="Confirmar senha"
					type="password"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,12}$"
				/>
				<CheckBox required>
					<p>
						Concordo com os
						<a href="http://?">
							{" "}
							Termos de Uso e nossa Política de Privacidade
						</a>
						.
					</p>
				</CheckBox>
				<Center>
					<Button>Registrar-se</Button>
				</Center>
			</Form>
			<p>
				Já possui uma conta? <a href="/login">Faça login aqui</a>.
			</p>
		</>
	);
};

export default LoginPage;
