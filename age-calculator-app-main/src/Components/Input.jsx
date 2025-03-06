export default function Input({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <label className={`${error ? 'text-light-red' : 'text-smokey-grey'} font-bold tracking-[3px]`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className={`border p-3 md:p-4 rounded-lg ${error ? 'border-light-red focus:border-light-red caret-light-red' : 'border-light-grey focus:border-purple caret-purple'} font-bold text-xl md:text-[2rem] outline-none transition-colors duration-200`}
      />
      {error && (
        <p className="text-light-red text-[15px] font-italic">{error}</p>
      )}
    </div>
  );
}
