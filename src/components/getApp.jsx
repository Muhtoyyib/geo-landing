import Modal from "./Modal/modal"

export default function GetApp(){
    return(
        <>
        <div className='modal-container'>
            <Modal
            className={'modal'}
            description={`Discover the convenience of our app! Choose your platform below to get started and unlock a world of seamless experiences on your device.`}
            >
            Are you ready to get started?
            </Modal> 
        </div>
        </>
    )
}