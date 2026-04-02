import { useCounterStore } from "@/store/useCounterStore"

export default function Home() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="text-lg text-gray-500">
        Vite + React 19 + Zustand + TailwindCSS + React Router
      </p>
      <div className="flex gap-4">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p className="text-lg text-gray-500">Count: {count}</p>
    </div>
  )
}
