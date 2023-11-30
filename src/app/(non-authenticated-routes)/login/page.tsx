"use client";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { Center } from "@/components/utils/Center";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage: NextPage = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const response = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		if (response?.error) {
			console.log(response);
			return;
		}
		console.log(response);

		router.replace("/");
	};
	return (
		<>
			<Brand />
			<Title>Entre na sua conta</Title>
			<Form>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					required
					minLength={3}
					type="email"
					placeholder="Email"
				/>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Senha"
					required
					minLength={3}
					type="password"
				/>
				<Center>
					<Button type="submit" onClick={handleSubmit}>
						Entrar
					</Button>
				</Center>
			</Form>
			<p>
				Não tem uma conta? <a href="/signup">Crie uma aqui</a>.
			</p>
		</>
	);
};

export default LoginPage;
