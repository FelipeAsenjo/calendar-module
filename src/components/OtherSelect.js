import { useSelector } from "react-redux";
import { useFormikContext } from "formik"
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

export default ({ setFieldValue, selectedTags }) => {
  const tags = useSelector((state) => state.tags);
  
  const onMultiChange = () => {
    return (item) => setFieldValue(xorBy(selectedTags, [item], 'id'))
  }

  return (
    <SelectBox
      label="Select tags"
      options={tags}
      selectedValues={selectedTags}
      onMultiSelect={onMultiChange()}
      onTapClose={onMultiChange()}
      isMulti
    />
  );
};
