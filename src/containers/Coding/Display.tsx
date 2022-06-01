const Display = ({ name, role }: { name: string; role: string }) => {
  return (
    <>
      <h1>Results</h1>
      <h2>Welcome!</h2>
      <div>
        <span>Name: {name}</span>
        <br />
        <span>Role: {role}</span>
      </div>
    </>
  )
}

export default Display
