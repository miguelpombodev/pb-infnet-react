import { FormContainer } from "./style"

type FormProps = {
  children?: React.ReactNode,
  handleSubmit: React.FormEventHandler<HTMLFormElement>
}

function Form ({ children, handleSubmit }: FormProps) {
 
  return (
    <FormContainer onSubmit={handleSubmit}>
      {
        children
      }
    </FormContainer>
  )
}

export default Form