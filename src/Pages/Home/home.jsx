import HomeTop from "../../Components/Hometop/hometop";
import Navbar from "../../Components/Nav/nav";
import Stats from "../../Components/Stats/stats";
import { Container } from "./home.styles";
import { Chart } from "react-google-charts";
import Footer from "../../Components/Footer/Footer";
import { connect } from "mqtt";
import { useState } from "react";

const Home = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["Machine 1", 0, 0],
    ["Machine 2", 0, 0],
    ["Machine 3", 0, 0],
    ["Machine 4", 0, 0],
    ["Machine 5", 0, 0],
    ["Machine 6", 0, 0],
    ["Machine 7", 0, 0],
    ["Machine 8", 0, 0],
    ["Machine 9", 0, 0],
    ["Machine 10", 0, 0],
  ];

  const options = {
    title: "",
    curveType: "function",
    legend: { position: "none" },
  };

  const [machineData, setMachineData] = useState([
    { name: "Machine 1", status: "inprogress" },
    { name: "Machine 2", status: "complete" },
    { name: "Machine 3", status: "inprogress" },
    { name: "Machine 4", status: "complete" },
    { name: "Machine 5", status: "inprogress" },
  ]);

  const client = connect("wss://test.mosquitto.org:8081");

  client.on("connect", () => {
    // TOOD: subscribe to topic to request machine data
    client.subscribe("pee", (err) => {
      if (!err) {
        client.publish("pee", "poop");
      }
    });
  });

  client.on("message", (topic, message) => {
    // TODO: parse machine data and update machineData state value
    console.log(topic, message.toString());
    client.end();
  });

  return (
    <Container>
      <Navbar />
      <HomeTop />
      <Stats data={machineData} />
      <p className='chart__title'>Lorem ipsum dolor sit amet,</p>
      <Chart
        chartType='LineChart'
        width='100%'
        height='400px'
        data={data}
        options={options}
      />
      <Footer />
    </Container>
  );
};

export default Home;
