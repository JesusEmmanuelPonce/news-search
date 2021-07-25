import React from 'react';
import { OPTIONS } from '../../constants';
import useSelect from '../../hooks/useSelect';
import "./Form.scss";

const Form = ({ setCategory }) => {

    const [category, SelectNews] = useSelect("general", OPTIONS)

    const handleNews = (e) => {
        e.preventDefault();
        setCategory(category);
    };

    return (
        <div className="row">
            <div className="col-sm-12 col-md-8 offset-md-2">
                <form
                    onSubmit={handleNews}
                    className="d-flex flex-column align-items-center"
                >
                    <h2 className="my-4">Search news by categories</h2>
                    <SelectNews />
                    <div className="mt-5 col-2 wrapper">
                        <button className="slide_from_left">
                            Search
                            <svg style={{ marginLeft: "10px", height: "1.2rem", width: "1.2rem" }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-7x">
                                <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
