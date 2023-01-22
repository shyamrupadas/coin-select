import s from './Select.module.scss';

interface SelectProps {
  onChange: () => void;
  options: string[];
}

export function Select({ onChange, options }: SelectProps) {
  return (
    <select className={s.select} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
