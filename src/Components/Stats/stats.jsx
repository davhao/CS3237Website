import { Container } from "./stats.styles";
const Stats = ({ data }) => {
  return (
    <Container>
      <h1 className='title'>Lorem ipsum dolor sit amet,</h1>
      <div className='cards__container'>
        <div className='card'>
          <p className='name'>Incomming Order Number</p>
          <p className='number'>45</p>
          <p className='date'>Today</p>
        </div>
        <div className='card'>
          <h1 className='name'>In Progress</h1>
          <h1 className='number'>45</h1>
          <h1 className='date'>Today</h1>
        </div>
        <div className='card'>
          <h1 className='name'>Estimated Time For Next Wash</h1>
          <h1 className='number'>00:00</h1>
          <h1 className='date'>Today</h1>
        </div>
      </div>
      <h1 className='title' style={{ marginTop: "40px", marginBottom: "21px" }}>
        Machine Stats
      </h1>
      {data.map((m) => (
        <div className='stats'>
          <p className='stat_name'>{m.name}</p>

          <div className='progress_container'>
            <p className={`progress ${m.status}`}></p>
          </div>
          <button className={`status ${m.status}`}>
            {m.status === "complete" ? "Done" : "inprogress"}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default Stats;
