import Alert from 'react-bootstrap/Alert';

const Welcome = (props) => {
    
    return(
        <>
        <Alert variant={'info'}>{props.sottotitolo}</Alert>
        </>
    );
};
export default Welcome;