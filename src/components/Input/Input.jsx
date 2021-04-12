import PropTypes from "prop-types";

// Icons
import SearchIcon from "@material-ui/icons/Search";

// Styling
import "./Input.css";

const Input = ({ submit, change, value }) => {
  return (
    <form onSubmit={submit}>
      <div className="input-box">
        <input
          type="text"
          className="input"
          placeholder="Search book title"
          onChange={change}
          value={value}
        />
        <div className="icon" onClick={() => submit}>
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

Input.propTypes = {
  submit: PropTypes.func,
  change: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
