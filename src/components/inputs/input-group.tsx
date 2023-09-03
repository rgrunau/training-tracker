

interface InputGroupProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  defaultValue: string;
  id: string;
}

const InputGroup = ({name, type, label,placeholder, defaultValue }: InputGroupProps) => (
  <div className="w-full flex flex-col my-1">
    <label htmlFor={name} className="text-left text-lg text-slate-800/75 p-2">{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    />
  </div>
)

export default InputGroup;