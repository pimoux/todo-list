import React from "react";
import PropTypes from 'prop-types';
import useCreationValue from "../services/hooks/useCreationValue";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTodo({ onCreate }) {
    const [text, date, onChange, dateChange, onSubmit] = useCreationValue(onCreate);

    return (
        <div className='create-todo'>
            <form id='form' onSubmit={(e) => onSubmit(e, text, date)}>
                    <label>
                        <input type="text" name="name" id='todo-text' placeholder="créer un todo" size="30" onChange={onChange} />
                    </label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => dateChange(date)}
                        minDate={new Date()}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                    />
                <input type="submit" value="créer" id="todo-submit" />
            </form>
        </div>
    )
}

CreateTodo.propTypes = {
    onCreate: PropTypes.func
}