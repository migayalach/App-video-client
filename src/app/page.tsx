"use client";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { increment, decrement } from "./redux/features/counterSlice";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider count={10}>
      <CounterComponent />
    </StoreProvider>
  );
}

function CounterComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
