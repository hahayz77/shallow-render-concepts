import { useMainStore } from "@/stores/MainStore.js"

export default function Home() {
	
	const firstValue = useMainStore((state) => state.firstValue)
	const addToFirst = useMainStore((state) => state.addToFirst)


	return(
		<div className="flex flex-col gap-3">
			<h1>Home</h1>
			<p>primeiro: {firstValue}</p>
			<button
				className="border-1 border-red-400 bg-red-100 p-3 w-fit"
				onClick={()=> addToFirst()}
				>
				Add 1 to first
			</button>
		</div>
	)
}
