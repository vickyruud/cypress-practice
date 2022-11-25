export const TodoForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input data-cy="input" className="border-4 border-gray-400 w-[500px]"  />
      <button type="submit">Submit</button>
    </form>
   );
}