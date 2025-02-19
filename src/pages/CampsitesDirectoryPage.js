import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampsitesDirectoryPage = () => {
  let selectCampsite = selectRandomCampsite();

  const toggleCampsite = () => {
    selectCampsite = selectRandomCampsite();
    console.log(selectCampsite);
  };
  return (
    <Container>
      <Button onClick={() => toggleCampsite()}>Select Random Campsite</Button>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList />
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetail campsite={selectCampsite} />
        </Col>
      </Row>
    </Container>
  );
};
export default CampsitesDirectoryPage;
