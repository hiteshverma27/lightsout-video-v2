import { TextInput, TextInputProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Search } from "tabler-icons-react";
import { useVideo } from "../contexts/VideoContext";

export function SearchBar() {
  const { setSearchTerm } = useVideo();
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 1000);

  useEffect(()=>setSearchTerm(debounced), [debounced]);
  ;
  return (
    <TextInput
      icon={<Search size={18} />}
      radius="md"
      size="md"
      placeholder="Search videos"
      rightSectionWidth={42}
      onChange={(e) => setValue(e.target.value.toLowerCase())}
    />
  );
}
