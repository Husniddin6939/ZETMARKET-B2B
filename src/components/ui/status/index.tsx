import { FC } from 'react';
import "./_style.scss";

interface ITypeStatus {
    type: string;
}

export const Status: FC<ITypeStatus> = ({ type }) => {
    switch (type.toLocaleLowerCase()) {
        case 'pending':
            return <div className='pending status'>
                <i className='bi bi-hourglass-split'></i>
                <span>pending</span>
            </div>;
        case 'processing':
            return <div className='processing status'>
                <i className='bi bi-lightning-charge'></i>
                <span>processing</span>
                </div>;
        case 'complated':
            return <div className='complated status'>
                <i className='bi bi-check2-square'></i>
                <span>Complated</span>
                </div>;
        case 'canceled':
            return <div className='canceled status'>
                <i className='bi bi-x-circle'></i>
                <span>Canceled</span>
                </div>;
        default:
            return <div className='unknown status'>
                <i className='bi bi-question-circle'></i>
                    <span>Unknown</span>
                </div>
    }
}
