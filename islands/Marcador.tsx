import { useMemo, useState } from "preact/hooks";
import Counter from "../components/Counter.tsx";
import { Button } from "../components/Button.tsx";

export default function Marcador() {
    const storageNos = Number(localStorage.getItem('counterNos'));
    const storageEles = Number(localStorage.getItem('counterEles'));

    const [counterNos, setCounterNos] = useState(storageNos);
    const [counterEles, setCounterEles] = useState(storageEles);

    const values = useMemo(() => {
        if (counterNos >= 12) {
            setCounterNos(0);
            setCounterEles(0);
            alert('Vencedor: Nós');
        }

        if (counterEles >= 12) {
            setCounterNos(0);
            setCounterEles(0);
            alert('Vencedor: Eles');
        }

        localStorage.setItem('counterNos', `${counterNos}`);
        localStorage.setItem('counterEles', `${counterEles}`);

        return {nos: counterNos, eles: counterEles};
    }, [counterEles, counterNos]);

    return (
        <div style="display: flex; flex-direction: row; width: 75%; align-self: center; justify-content: space-around;">
            <div style="display: flex; flex-direction: column;">
                <Counter count={values.nos} label="Nos"></Counter>
                <div>
                    <Button onClick={() => setCounterNos(counterNos - 1)}>-1</Button>
                    <Button onClick={() => setCounterNos(counterNos + 1)}>+1</Button>
                </div>
            </div>

            <div style="display: flex; flex-direction: column;">
                <Counter count={values.eles} label="Eles"></Counter>
                <div>
                    <Button onClick={() => setCounterEles(counterEles - 1)}>-1</Button>
                    <Button onClick={() => setCounterEles(counterEles + 1)}>+1</Button>
                </div>
            </div>
        </div>
    );
}