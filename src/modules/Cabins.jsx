import Heading from "../components/common/Heading";
import Row from "../components/common/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../components/common/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";

const Cabins = () => {
  const [isFormDisplay, setIsFormDisplay] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setIsFormDisplay(!isFormDisplay)}>
          Add new cabin
        </Button>
        {isFormDisplay && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
