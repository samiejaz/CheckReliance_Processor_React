import { Dropdown } from "primereact/dropdown"
import { classNames } from "primereact/utils"
import React from "react"
import { Controller } from "react-hook-form"

export default function CDropdown({
  control,
  name,
  onChange,
  focusOptions,
  options = [],
  placeholder = "",
  optionLabel = "label",
  optionValue = "value",
  required = false,
  showOnFocus = true,
  showClear = false,
  filter = true,
  disabled = false,
  errorMessage = "This field is required!",
  ...moreOptions
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <>
            <Dropdown
              id={field.name}
              value={field.value}
              optionLabel={optionLabel}
              optionValue={optionValue}
              placeholder={placeholder}
              options={options}
              focusInputRef={field.ref}
              ref={field.ref}
              onChange={(e) => {
                field.onChange(e.value)
                if (focusOptions) {
                  if (
                    e.originalEvent.key === "ArrowDown" ||
                    e.originalEvent.key === "ArrowUp"
                  ) {
                  } else {
                    focusOptions(e)
                    let obj = {
                      value: e.value,
                      ref: field.ref,
                    }
                    if (onChange) {
                      onChange(obj)
                    }
                  }
                }
              }}
              defaultValue={""}
              filterInputAutoFocus
              onKeyDown={(e) => {
                if (focusOptions) {
                  if (e.key === "Enter") {
                    focusOptions(e)
                    let obj = {
                      value: field.value,
                    }

                    if (onChange) {
                      onChange(obj)
                    }
                  }
                }
              }}
              showOnFocus={showOnFocus}
              disabled={disabled}
              showClear={showClear}
              className={classNames({
                "p-invalid": fieldState.error,
              })}
              filter={filter}
              style={{
                width: "100%",
                backgroundColor: disabled === true ? "#dee2e6" : "white",
                color: "black",
              }}
              pt={{
                filterInput: {
                  style: {
                    padding: "0.1rem 0.4rem",
                  },
                },
                item: {
                  style: {
                    padding: "0.4rem 0.4rem",
                  },
                },
                filterIcon: {
                  style: {
                    display: "none",
                  },
                },
                root: {
                  style: {
                    borderColor: "#D1D5DB",
                  },
                },
              }}
              resetFilterOnHide
              {...moreOptions}
            />
            <span className="text-danger text-sm">
              {fieldState.error ? errorMessage : ""}
            </span>
          </>
        )}
      />
    </>
  )
}
