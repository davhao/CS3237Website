import { Container } from "./stats.styles";
const Stats = ({ data, fetchStats }) => {
  return (
    <Container>
      <h1 className='title'>Quick stats</h1>
      <div
        className='cards__container'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex" }}>
          <div className='card' style={{ width: "260px", marginRight: "2rem" }}>
            <p className='name'>Average cycle duration</p>
            <p className='number'>{data.average}</p>
            <p className='date'>minutes</p>
          </div>
          <div className='card' style={{ width: "260px" }}>
            <h1 className='name'>Energy consumption today</h1>
            <h1 className='number'>{data.eneryToday.toFixed(3)}</h1>
            <h1 className='date'>kWh</h1>
          </div>
        </div>
        <h1
          style={{
            color: "white",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => fetchStats()}
        >
          Refresh
        </h1>
      </div>
      <h1 className='title' style={{ marginTop: "40px", marginBottom: "21px" }}>
        Realtime use
      </h1>
      {data.currState.map((m, i) => (
        <div className='stats'>
          <p className='stat_name'>Machine {i + 1}</p>

          <div className='progress_container'>
            <p className={`progress`} style={{ width: `${m[0]}%` }}></p>
          </div>
          <button className={`status ${m[0]}`}>
            {m[1] === -1
              ? "Available soon"
              : m[1] > 0
              ? `Available in ${m[1]} minutes`
              : "Available"}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default Stats;
