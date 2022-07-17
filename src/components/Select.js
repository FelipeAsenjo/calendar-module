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
          label: tag.item,
        }))}
        multiSelection={true}
        closeDropdownOnSelect={false}
        placeholderText={"Select tags"}
        selectControlTextStyle={{ fontSize: 16 }}
        optionTextStyle={{ fontSize: 16 }}
        selectContainerStyle={{ width: "100%", marginVertical: 10 }}
        defaultOption={[]}
        onSelect={(options) =>
          setSelectedTags((currentTags) => currentTags.concat(options.value))
        }
      />
    </SelectModalProvider>
  );
};
