interface Props {
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  required?: boolean;
}

const TextArea = ({ label, name, className, onChange, required }: Props) => (
  <div className="input-container mb-2 [&+.input-container]:mb-4">
    <label htmlFor={name} className="label capitalize">
      {label}
    </label>
    <textarea
      name={name}
      className={`textarea textarea-bordered border-2 border-solid textarea-md w-full text-base focus:outline-none focus:border-gray-500 ${className}`}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default TextArea;
