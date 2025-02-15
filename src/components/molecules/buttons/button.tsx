type ButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  buttonName: string
  buttonType: ButtonType
}

type ButtonType = 'primary' | 'secondary' | 'ghost' | 'icon' | 'text'

export const Button = (props: ButtonProps) => {
  const { buttonName, buttonType } = props

  // Define classes dynamically based on buttonType
  const buttonClass = {
    primary: 'bg-purple text-white shadow-md',
    secondary: 'bg-purple bg-opacity-15 text-purple',
    ghost: 'bg-transparent text-purple border border-purple',
    icon: 'p-2 text-gray-500 hover:text-gray-700',
    text: 'text-purple',
  }

  return (
    <div
      className={`h3 w-auto px-4 py-2 rounded-md text-sm ${buttonClass[buttonType]}`}>
      {buttonName}
    </div>
  )
}
