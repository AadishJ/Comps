import Accordian from "./Components/Accordian";
import Button from "./Components/Button";

function App ()
{
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <Button primary rounded>Primary</Button>
                <Button secondary rounded>Secondary</Button>
                <Button success>Success</Button>
                <Button danger>Danger</Button>
                <Button warning outlined rounded>Warning</Button>
            </div>
            <div>
                <Accordian />
            </div>
        </div>
    );
}

export default App;