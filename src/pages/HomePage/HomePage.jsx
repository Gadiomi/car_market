import {
  HomeContainer,
  ContentContainer,
  Text,
  Title,
  DescriptionText,
  ImagesContainer,
  BgCarImg,
  ButtonContauner,
  ContactBtn,
  Button,
} from './HomePage.styled';
import CarBagroundImg from '../../images/photo_bg.jpg';

function HomePage() {
  return (
    <>
      <HomeContainer>
        <ContentContainer>
          <Text>Plan your trip now</Text>
          <Title>
            Save <span>big</span> with our car rental
          </Title>
          <DescriptionText>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </DescriptionText>
          <ButtonContauner>
            <ContactBtn href="tel:+380730000000">Contact Us</ContactBtn>
            <Button to="/catalog">Go to catalog</Button>
          </ButtonContauner>
        </ContentContainer>

        <ImagesContainer>
          <BgCarImg
            src={CarBagroundImg}
            alt="bagroundimg"
            loading="lazy"
          ></BgCarImg>
        </ImagesContainer>
      </HomeContainer>
    </>
  );
}

export default HomePage;
