import { FC } from "react";
import { Spinner, Row, Col } from "react-bootstrap";

const LoadSpinner: FC = () => {
    return (
        <Row>
            <Col>
                <Spinner animation="grow" variant="dark" size="sm" />
                <Spinner animation="grow" variant="dark" size="sm" />
                <Spinner animation="grow" variant="dark" size="sm" />
                <Spinner animation="grow" variant="dark" size="sm" />
            </Col>
        </Row>
    );
};

export default LoadSpinner;
