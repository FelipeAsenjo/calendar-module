import { useSelector } from "react-redux";
import {
  Select,
  SelectModalProvider,
} from "@mobile-reality/react-native-select-pro";

export default ({ setSelectedTags }) => {
  const tags = useSelector((state) => state.tags);
  
  return (
    <SelectModalProvider>
      <Select
        options={tags.map((tag) => ({
          value: tag.id,
          label: tag.title,
        }))}
        //clearable={true}
        multiSelection={true}
        closeDropdownOnSelect={false}
        placeholderText={"Select tags"}
        //searchable={true}
        selectContainerStyle={{ width: "100%", marginVertical: 10 }}
        //selectControlStyle={{ width: 200 }}
        defaultOption={[]}
        onSelect={(options) =>
          setSelectedTags((currentTags) => currentTags.concat(options.value))
        }
      />
    </SelectModalProvider>
  );
};
