import {useState} from "react";

export default function useCreationValue(onSubmit) {
    const [text, setText] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const onChange = e => {
        setText(e.target.value);
    }

    const dateChange = (date) => {
        setStartDate(date);
    }

    const handleSubmit = (e, text, date) => {
        const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        const formattedDate = date.toLocaleDateString('fr-FR', options);
        onSubmit(e, text, formattedDate);
        setText('');
    }
    return [text, startDate, onChange, dateChange, handleSubmit];
}