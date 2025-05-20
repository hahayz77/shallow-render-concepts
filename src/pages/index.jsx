import { useMainStore } from "@/stores/MainStore.js"
import Link from "next/link"

export default function Home() {
	const { firstValue, addToFirst } = useMainStore()

	// O código JSX que você quer mostrar como texto
	const codeString = `\`\`\`JSX
		<>
			<div className="flex flex-col gap-3">
				<h1>Home</h1>
				<p>primeiro: {firstValue}</p>
				<button
					className="border-1 border-red-400 bg-red-100 p-3 w-fit"
					onClick={() => addToFirst()}
				>
					Add One
				</button>
			</div>
			<pre>
				<code>{codeString}</code>
			</pre>
		</>
	\`\`\`` // Use template literals para strings multilinhas

	return (
		<>
			<div className="flex flex-col gap-3">
				<h1>Exemplo 1</h1>
				<p>
					Forma mais comum onde todos os componentes da tela
					renderizam
				</p>
				<p>Valor: {firstValue}</p>
				<button
					className="border-1 border-red-400 bg-red-100 p-3 w-fit"
					onClick={() => addToFirst()}
				>
					Add One
				</button>
			</div>
			<div className="code p-8">
				<pre className="h-60 overflow-y-scroll bg-gray-100 p-4 rounded-xl space-y-2">
					<code>{codeString}</code>
				</pre>
			</div>
			<div className="flex gap-4">
				<Link
					href="/2"
					className="border-1 border-green-400 bg-green-100 p-2"
				>
					<button>Segundo exemplo</button>
				</Link>
			</div>
		</>
	)
}
