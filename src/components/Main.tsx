import Form from "./form/Form.tsx";
import Header from "./Header.tsx";
import CalculateButton from "./CalculateButton.tsx";

const Main = () => {
    return (
        <div className={'text-text-blue'}>
            <Header/>
            <Form/>
            <CalculateButton/>
        </div>
    );
};

export default Main;