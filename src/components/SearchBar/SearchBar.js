import { useSearchParams } from "react-router-dom";

export const SearchBar = ({ onSubmit}) => {

const [params, setParams] = useSearchParams();
const topic = params.get("topic") ?? '';

const changeTopic = (evt)=>{
  params.set('topic', evt.target.value);
  setParams(params)
}




  return (
    <div className="searchbar">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="search-form-input"
          onChange={changeTopic}
          value={topic}
          type="text"
          name="query"
          placeholder="Search"
        />{' '}
        <button className="search-form-button">Search</button>
      </form>
    </div>
  );
};
