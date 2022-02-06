import { useNavigate } from 'react-router-dom';
export const MoviesPage = () => {
  let navigate = useNavigate();
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        navigate(`/movies/?query=${event.currentTarget.elements.name.value}`);
      }}
    >
      <input type="text" name="name" placeholder="Enter name" />
      <button>Search</button>
    </form>
  );
};
