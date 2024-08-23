import Heading from "../components/common/Heading";
import Row from "../components/common/Row";
import CabinTable from "../features/cabins/CabinTable";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
