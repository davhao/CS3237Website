import { Container } from "./hometop.styles";
import media from "../../Assets/media.png";
import overlay from "../../Assets/overlay.png";
import play from "../../Assets/play.png";
const HomeTop = () => {
  return (
    <Container>
      <div className='top'>
        <div className='left'>
          <p className='bold'>Welcome, scroll down to view live laundry data</p>
        </div>
      </div>
      <div className='bottom'>
        <img src={media} alt='media' className='media' />
        <img src={overlay} alt='overlay' className='overlay' />
        {/* <button className='play__button'>
					<img src={play} alt='play' />
				</button> */}
      </div>
    </Container>
  );
};

export default HomeTop;
