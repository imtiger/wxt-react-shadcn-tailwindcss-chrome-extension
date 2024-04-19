import './App.css';
import {Button} from "@/components/ui/button.tsx";
import {MessageType} from "@/entrypoints/types.ts";

function App() {

    async function sendMessageToBackground() {
        let response = await browser.runtime.sendMessage({eventType: MessageType.clickExtIcon});
        console.log(response)
    }

    return (
        <div className="grid grid-cols-1 gap-3">
            <Button onClick={sendMessageToBackground}>send message</Button>
        </div>
    );
}

export default App;
