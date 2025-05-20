import { useMainStore } from "@/stores/MainStore"
import Link from "next/link"

// O código JSX que você quer mostrar como texto
const codeString = `\`\`\`JSX

	const FirstValue = () => {
		const firstValue = useMainStore((state) => state.firstValue)
		return <p>Valor: {firstValue}</p>
	}

	const AddButton = () => {
		const addToFirst = useMainStore((state) => state.addToFirst)
		return (
			<button
				className="border-1 border-red-400 bg-red-100 p-3 w-fit"
				onClick={() => addToFirst()}
			>
				Add One
			</button>
		)
	}

	const LinkToFirstExample = () => (
		<Link
			href="/"
			className="border-1 border-green-400 bg-green-100 p-2"
		>
			<button>Primeiro Exemplo</button>
		</Link>
	)

	const LinkToThirdExample = () => (
		<Link
			href="/3"
			className="border-1 border-blue-400 bg-blue-200 p-2"
		>
			<button>Terceiro Exemplo</button>
		</Link>
	)

	const Example2 = () => {
		return (
			<div className="flex flex-col gap-3">
				<h1> Exemplo 2</h1>
				<p>
					A função FirstValue isola o componente que precisa renderizar de
					forma separada.
				</p>
				<FirstValue />
				<AddButton />
				<pre>
					<code>{codeString}</code>
				</pre>
				<div className="flex gap-4">
					<LinkToFirstExample />
					<LinkToThirdExample />
				</div>
			</div>
		)
	}
\`\`\`` // Use template literals para strings multilinhas

const FirstValue = () => {
	const firstValue = useMainStore((state) => state.firstValue)
	return <p>Valor: {firstValue}</p>
}

const AddButton = () => {
	const addToFirst = useMainStore((state) => state.addToFirst)
	return (
		<button
			className="border-1 border-red-400 bg-red-100 p-3 w-fit"
			onClick={() => addToFirst()}
		>
			Add One
		</button>
	)
}

const LinkToFirstExample = () => (
	<Link
		href="/"
		className="border-1 border-green-400 bg-green-100 p-2"
	>
		<button>Primeiro Exemplo</button>
	</Link>
)

const LinkToThirdExample = () => (
	<Link
		href="/3"
		className="border-1 border-blue-400 bg-blue-200 p-2"
	>
		<button>Terceiro Exemplo</button>
	</Link>
)

const Example2 = () => {
	return (
		<div className="flex flex-col gap-3">
			<h2> Exemplo 2</h2>
			<div className=" code bg-gray-100 p-4 rounded-xl text-sm leading-relaxed space-y-2 m-6">
				<h3 className="text-lg font-bold">📘 Resumo do Exemplo 2</h3>

				<p><strong>🎯 Objetivo:</strong> separar a lógica que consome Zustand em componentes isolados para evitar re-renderizações desnecessárias na árvore principal.</p>

				<p><strong>✅ O que foi feito:</strong></p>
				<ul className="list-disc list-inside space-y-1">
					<li><strong>FirstValue</strong> e <strong>AddButton</strong> acessam o Zustand diretamente e foram isolados.</li>
					<li>Links de navegação (<strong>LinkToFirstExample</strong> e <strong>LinkToThirdExample</strong>) também foram extraídos como componentes.</li>
					<li>O componente principal <strong>Example2</strong> mantém somente a composição dos elementos e não depende do Zustand diretamente.</li>
				</ul>

				<p><strong>💡 Por que isso ajuda:</strong></p>
				<p>Separando os componentes que usam Zustand, o React só re-renderiza o que realmente depende do estado global. Isso mantém a interface mais eficiente.</p>

				<p><strong>🧠 Conclusão:</strong> é possível melhorar performance e organização com divisões simples. Não é necessário separar tudo, apenas o que for reativo ao estado.</p>
			</div>

			<FirstValue />
			<AddButton />
			<div className="code p-8">
				<pre className="h-60 overflow-y-scroll bg-gray-100 p-4 rounded-xl space-y-2">
					<code>{codeString}</code>
				</pre>
			</div>
			<div className="flex gap-4">
				<LinkToFirstExample />
				<LinkToThirdExample />
			</div>
		</div>
	)
}

export default Example2
