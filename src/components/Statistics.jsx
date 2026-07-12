function Statistics({ stats, title }) {
  return (
    <section>
      {title && <h2>Upload stats</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Statistics;