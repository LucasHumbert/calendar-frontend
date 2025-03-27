export default function AuthInput({ name, label, type, defaultValue = '', required = false, children = '' } : { name: string, label: string, type: string, defaultValue?: string, required?: boolean, children?: React.ReactNode }) {
    return (
        <div className='w-full mb-5'>
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <input type={type} id={name} name={name}
                   defaultValue={defaultValue}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required={required} />
            {children}
        </div>
    )
}