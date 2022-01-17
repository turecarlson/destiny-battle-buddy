import {Form} from 'react-bootstrap';

const CharacterSearch = () => {

    return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Guardian Name to Load Viewer</Form.Label>
                <Form.Control type="name" placeholder="Enter Guardian Name" />
            </Form.Group>
        </Form>
    </>
    );
}

export default CharacterSearch;