import NotificationModal from '../../components/modal/NotificationModal.jsx';
import {useDispatch, useSelector} from "react-redux";
import {notification, NotificationState} from "../../store/modules/notification.js";
import {useEffect} from "react";

export function NotificationProvider() {
    const notificationState = useSelector<any>((state)=> state.notification) as NotificationState
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('notified')
    }, [notificationState.modal.show]);
    return (
        <>
            <NotificationModal
                onClose={()=>dispatch(notification.mutation.closeModal())}
                type={notificationState.modal.type}
                title={notificationState.modal.title}
                body={notificationState.modal.body}
                show={notificationState.modal.show} />
        </>
    )

}