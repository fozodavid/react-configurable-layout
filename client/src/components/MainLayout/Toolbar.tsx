import React from 'react';
import ToolbarStyles from './Toolbar.module.css'

const Toolbar: React.FC = () => {
    return (
        <div className={ToolbarStyles.toolbar}>
            <div>
                <button className='btn btn-light'>
                    <i className="bi bi-plus-square-fill"></i>
                    <span> New Task </span>
                </button>
            </div>

            <div className="btn-group" role="group" aria-label="Share/Export">
                <button type="button" className="btn btn-outline-dark btn-sm">Share</button>
                <button type="button" className="btn btn-outline-dark btn-sm">Export</button>
            </div>

        </div>
    )
}

export default Toolbar;
