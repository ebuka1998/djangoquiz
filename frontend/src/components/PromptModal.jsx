import React from 'react'

const PromptModal = ({exampleModal, cancle}) => {
    return (
        <div className="modal fade" id={exampleModal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">close</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Are you sure you want to cancle?
                <p>All changes will be lost</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">go back to quiz</button>
                <button type="button" data-dismiss="modal" onClick={cancle} className="btn btn-danger"> yes cancle</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default PromptModal
