import { FC } from "react";
import useDataStore from "../../stores/useDataStore";
import PROGRESS_BARS from "../../constants/PROGRESS_BARS";

const ProgressSelect: FC = function () {
  const setSelectedBar = useDataStore((state) => state.setSelectedBar);
  const handleChange = (e) => setSelectedBar(+e.target.value);
  return (
    <select onChange={handleChange}>
      {PROGRESS_BARS.map(({ id }) => (
        <option key={id} value={id}>
          #progress{id}
        </option>
      ))}
    </select>
  );
};

export default ProgressSelect;
