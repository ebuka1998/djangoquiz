import React from 'react'

const SubmitModal = ({exampleModal1, submit}) => {
    return (
        <div className="modal fade" id={exampleModal1} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">close</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Are you sure you want to Submit? make sure you are done answering
                <p>your score will be submitted</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">go back to quiz</button>
                <button type="button" data-dismiss="modal" onClick={submit} className="btn btn-primary"> yes Submit</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default SubmitModal
