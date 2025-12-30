import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

import { carManufacturers } from "@/src/data/cars";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: {
  manufacturer: string;
  setManuFacturer: (man: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? carManufacturers
      : carManufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox
        value={manufacturer}
        onChange={(value) => setManuFacturer(value || "")}
      >
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </ComboboxButton>

          {/* Input field for searching */}
          <ComboboxInput
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Volkswagen..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* Removed 'static' prop so Headless UI manages visibility */}
            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm min-h-[600px]">
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-primary-purple"
                            }`}
                          >
                            {/* You might want an icon here, like a Checkmark */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
