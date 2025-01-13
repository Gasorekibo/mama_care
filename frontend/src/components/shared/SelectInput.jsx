import PropTypes from "prop-types";

function SelectInput({ options, placeHolder, haslabel }) {
  return (
    <form className="max-w-sm mb-3">
      {haslabel && (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
      )}
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue={"Default"}>{placeHolder}</option>
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-sm text-gray-900 dark:text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
}
SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeHolder: PropTypes.string.isRequired,
  haslabel: PropTypes.bool.isRequired,
};

export default SelectInput;
