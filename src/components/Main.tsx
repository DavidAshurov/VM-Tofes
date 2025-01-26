import Form from "./form/Form.tsx";
import RightSide from "./RightSide.tsx";
import Header from "./Header.tsx";

const Main = () => {
    return (
        <div className={'text-text-blue'}>
            <Header/>
            <div className={'p-2 flex'}>
                <Form/>
                <RightSide/>
            </div>
        </div>
    );
};

export default Main;