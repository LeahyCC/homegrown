import { useState } from 'react'
import Display from './display'

const Coding: React.FunctionComponent = () => {
  const [viewResults, setViewResults] = useState(false)
  const [inputNameState, setInputNameState] = useState('')
  const [inputRoleState, setInputRoleState] = useState('')

  const headingLabel = <h1>Hello world</h1>

  const inputName = (labelName: string) => (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputNameState(e.target.value)
        }
        value={inputNameState || undefined}
        type="text"
        name={labelName}
      />
    </>
  )

  const inputRole = (labelName: string) => {
    const roles = ['', 'Admin', 'User', 'Manager']
    return (
      <>
        <label htmlFor={labelName}>{labelName}</label>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setInputRoleState(e.target.value)
          }
          name={labelName}
        >
          {roles.map((role) => {
            return (
              <option
                selected={inputRoleState === role}
                key={role}
                value={role}
              >
                {role}
              </option>
            )
          })}
        </select>
      </>
    )
  }

  const form = (
    <form action="">
      <>
        {inputName('Name')}
        {inputRole('Role')}
      </>
      <button onClick={() => setViewResults(true)}>Submit</button>
    </form>
  )

  return (
    <div>
      {viewResults && (
        <button onClick={() => setViewResults(false)}>Back</button>
      )}
      {headingLabel}
      {!viewResults ? (
        form
      ) : (
        <Display name={inputNameState} role={inputRoleState} />
      )}
    </div>
  )
}

export default Coding
