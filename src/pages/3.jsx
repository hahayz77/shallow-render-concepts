import { useMainStore } from "@/stores/MainStore"
import Link from "next/link"
import { memo } from "react"

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

	const StaticLinks = memo(() => (
		<div className="flex gap-4">
			<Link
				href="/2"
				className="border-1 border-green-400 bg-green-100 p-2"
			>
				<button>Segundo Exemplo</button>
			</Link>
			<Link
				href="/4"
				className="border-1 border-blue-400 bg-blue-200 p-2"
			>
				<button>Terceiro Exemplo</button>
			</Link>
		</div>
	))

	const StaticCodeBlock = memo(() => (
		<div className="code p-8">
			<pre className="h-60 overflow-y-scroll border-1 -border-green-400">
				<code>{codeString}</code>
			</pre>
		</div>

	))

	const Example3Component = () => {
		return (
			<div className="flex flex-col gap-3">
				<h2>Exemplo 3</h2>
				<p>----</p>
				<FirstValue />
				<AddButton />
				<StaticCodeBlock />
				<StaticLinks />
			</div>
		)
	}

	const Example3 = memo(Example3Component)
\`\`\``

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

const StaticLinks = memo(() => (
	<div className="flex gap-4">
		<Link
			href="/2"
			className="border-1 border-green-400 bg-green-100 p-2"
		>
			<button>Segundo Exemplo</button>
		</Link>
		{/* <Link
			href="/4"
			className="border-1 border-blue-400 bg-blue-200 p-2"
		>
			<button>Quarto Exemplo</button>
		</Link> */}
	</div>
))

const StaticCodeBlock = memo(() => (
	<div className="code p-8">
		<pre className="h-60 overflow-y-scroll bg-gray-100 p-4 rounded-xl space-y-2">
			<code>{codeString}</code>
		</pre>
	</div>

))

const Example3Component = () => {
	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-lg font-bold">Exemplo 3</h2>
			<div className="bg-gray-100 p-4 rounded-xl text-sm leading-relaxed space-y-2 m-6">
				<h3 className="text-lg font-bold">📘 Resumo das alterações</h3>

				<p><strong>🎯 Objetivo:</strong> evitar re-renderizações desnecessárias em componentes que <em>não usam Zustand</em>, como os botões de navegação e o bloco de código.</p>

				<p><strong>✅ O que foi feito:</strong></p>
				<ul className="list-disc list-inside space-y-1">
					<li><strong>FirstValue</strong> e <strong>AddButton</strong> foram isolados por usarem Zustand.</li>
					<li><strong>StaticLinks</strong> (navegação) e <strong>StaticCodeBlock</strong> (bloco de código) foram criados como componentes separados e <code>memoizados</code>.</li>
					<li>O componente principal <strong>Example3Component</strong> também foi <code>memoizado</code>.</li>
				</ul>

				<p><strong>💡 Por que isso funciona:</strong></p>
				<p>React re-renderiza um componente quando seu pai muda, a menos que ele esteja <code>memo()</code>. Separando os que usam Zustand dos estáticos e memoizando os que não mudam, evitamos re-renderizações desnecessárias.</p>

				<p><strong>🧠 Conclusão:</strong> não é preciso “picotar” tudo. Só isolar e memoizar o necessário para manter desempenho e organização.</p>
			</div>

			<FirstValue />
			<AddButton />
			<StaticCodeBlock />
			<StaticLinks />
		</div>
	)
}

const Example3 = memo(Example3Component)

export default Example3
