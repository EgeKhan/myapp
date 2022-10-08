import {Button,Modal} from 'react-bootstrap';
import useDeneme from './useDeneme';

interface ModalComponentProps{
    child?: any;
}

const ModalComponent: React.FC<ModalComponentProps> = ({child}) => {
const modalController = useDeneme();


    return ( 
    <>
        <div>{child}</div>
        <Button variant="primary" onClick={() => {modalController.setShow(true)}}>
        Launch demo modal
      </Button>

      <Modal show={modalController.show} onHide={modalController.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalController.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalController.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>   
    );
};
export default ModalComponent;
