"use client";

import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { autocompleteClasses } from "@mui/material/Autocomplete";

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div className="bg-white opacity-60 text-sm">
      <div {...getRootProps()}>
        <label
          {...getInputLabelProps()}
          className="p-[0 0 4px] leading-6 block"
        >
          Customized hook
        </label>
        <div
          ref={setAnchorEl}
          className="w-[300px] border border-solid border-[#d9d9d9] bg-[#fff] rounded-[4px] p-1
        flex flex-wrap hover:border-[#40a9ff] focus:border-[#40a9ff] shadow-[0 0 0 2px rgb-(24 144 255 / 0.2)]
        "
        >
          {value.map((option: FilmOptionType, index: number) => {
            const label = option.title;
            const onDelete = getTagProps({ index }).onDelete;
            return (
              <div
                {...getTagProps({ index })}
                key={index}
                tabIndex={-1}
                className="flex items-center h-[24px] m-[2px] leading-[22px] bg-white border border-solid 
                border-[#e8e8e8] rounded-sm box-content p-[0 4px 0 10px] outline-none overflow-hidden
                focus:border-[#40a9ff] focus:bg-[#e6f7ff]"
              >
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {label}
                </span>
                <CloseIcon onClick={onDelete} />
              </div>
            );
          })}
          <input
            {...getInputProps()}
            className="bg-[#fff] text-black opacity-80 h-[30px] box-border p-[4px 6px] w-0 min-w-[30px] flex-grow
          border-0 m-0 outline-none"
          />
        </div>
        {groupedOptions.length > 0 ? (
          <ul
            className="w-[300px] m-[2px 0 0] absolute list-none bg-white overflow-auto max-h-[250px] rounded-[4px]
            shaodow-[0 2px 8px rgb-(0 0 0 / 0.15)] z-[1]"
          >
            {(groupedOptions as typeof top100Films).map((option, index) => (
              <>
                <li
                  {...getOptionProps({ option, index })}
                  key={index}
                  className="p-[5px 12px] flex"
                >
                  <span className="flex-grow">{option.title}</span>
                  <CheckIcon fontSize="small" className="text-transparent" />
                </li>
              </>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
];
