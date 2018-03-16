import React from 'react';

const Form = ({onSubmit, handleZip1, handleZip2}) => {
    return (
        <div>
            <form className="form-horizontal" onSubmit={onSubmit}>
                <label htmlFor="zip1">Zip Code 1</label>
                <input className="form-control" id="zip1" name="zip1" type="number" onChange={handleZip1}/>
                <label htmlFor="zip2">Zip Code 2</label>
                <input className="form-control" id="zip2" name="zip2" type="number" onChange={handleZip2}/>
                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default Form;