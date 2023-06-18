function TodoItem(props) {
  const { todo, updateTodo, deleteTodo } = props;
  const textStyle = todo.completed === true ? "line-through" : "";

  return (
    <li key={todo.id} className="mb-4">
      <div class="flex items-center justify-center block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          class={`${textStyle} w-full text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50`}
        >
          {todo.task}
        </h5>
        {todo.completed === false && (
          <button
            class="px-4 py-1 text-sm text-green-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            onClick={updateTodo}
          >
            Selesai
          </button>
        )}

        <button
          class="ml-3 px-4 py-1 text-sm text-red-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          onClick={deleteTodo}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
