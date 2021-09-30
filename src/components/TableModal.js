import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import ScoreBoard from './ScoreBoard';

function TableModal({ modal, toggle }) {
  return (
    <>
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}><Button class="btn btn-success btn-lg btn-block" onClick={toggle}>Score Table</Button></Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader>Scores</ModalHeader>
        <ModalBody>
          <ScoreBoard />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default TableModal;