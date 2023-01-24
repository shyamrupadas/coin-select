import s from './Select.module.scss';

interface SelectProps {
  onChange: (id: string) => void;
  options: { code: string; name: string }[];
}

export function Select({ onChange, options }: SelectProps) {
  return (
    <select
      className={s.select}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {options?.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
