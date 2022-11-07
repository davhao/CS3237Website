import HomeTop from "../../Components/Hometop/hometop";
import Navbar from "../../Components/Nav/nav";
import Stats from "../../Components/Stats/stats";
import { Container } from "./home.styles";
import { Chart } from "react-google-charts";
import Footer from "../../Components/Footer/Footer";
import { connect } from "mqtt";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const options = {
    title: "",
    curveType: "function",
    legend: { position: "none" },
  };

  const [data, setData] = useState({
    cyclesPerDay: [6, 2, 3, 4, 7, 8, 9],
    average: 40,
    currState: [
      [75, 5],
      [0, 0],
      [100, -1],
    ],
    eneryToday: 80,
    cyclesPerHour: [
      0, 0, 0, 2, 1, 0, 2, 0, 0, 4, 0, 3, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0,
    ],
  });

  const client = connect("ws://test.mosquitto.org:8081");

  useEffect(() => {
    client.on("connect", () => {
      console.log("connected");
      client.subscribe("IOT_server_website_laundromates", (e) => {
        if (!e) console.log("success");
      });
      fetchStats();

      console.log("run");
    });

    client.on("message", (topic, message) => {
      /*
      average: average time per cycle (in seconds)
      currState: [completion percentag, minutes til end]
      cycles: [mon-sun]
      energyToday: energy consumed (today) in 
    */

      switch (topic) {
        case "IOT_server_website_laundromates":
          setData(JSON.parse(message.toString()));
          console.log(JSON.parse(message.toString()));
      }

      client.end();
    });
  }, []);

  const fetchStats = () => {
    client.publish("IOT_nus_test", "requestData");
  };

  const dayMap = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };

  const hourMap = {
    0: "00",
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    21: "21",
    22: "22",
    23: "23",
  };

  return !data ? null : (
    <Container>
      <Navbar />
      <HomeTop />
      <Stats data={data} fetchStats={fetchStats} />
      <p className='chart__title'>Cycles per day based on day of week</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5rem 0",
        }}
      >
        <Chart
          chartType='Bar'
          width='800px'
          justifyContent='center'
          height='400px'
          data={[
            ["Day", "Cycles"],
            ...data.cyclesPerDay.map((c, i) => [dayMap[i], c]),
          ]}
          options={options}
        />
      </div>
      <p className='chart__title'>Today's typical washing machine usage</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5rem 0",
        }}
      >
        <Chart
          chartType='Line'
          width='800px'
          justifyContent='center'
          height='400px'
          data={[
            ["Hour", "Cycles"],
            ...data.cyclesPerHour.map((c, i) => [hourMap[i], c]),
          ]}
          options={options}
        />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
