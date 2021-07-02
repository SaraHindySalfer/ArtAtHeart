import React from 'react'
import Toast from 'react-toast-component';
export default function ToastAlert(props) {
    const setToast=props.setToast
    let isOpen=props.isOpen
    return (
        <div>
            <Toast
                isOpen={isOpen}
                hasAutoDismiss={false}
                hasCloseBtn
                closeCallback={() => setToast(false)}
                description="There's some great info here."
                title="App Notification!!"
                duration={5000}
                classNames={['success']}  // '', 'info', 'warning', 'error'
            />
        </div>
    )
}
