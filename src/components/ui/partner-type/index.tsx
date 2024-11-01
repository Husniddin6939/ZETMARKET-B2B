import {FC} from 'react';
import {Uzum} from "@icons";
import {Alif} from "@icons";
import { ZoodPay } from '@icons';
import {OpenCard} from "@icons";
import {InTend} from "@icons";
import {Click} from "@icons";
import "./_style.scss";

type TPartnerType={
    type:string
}

export const PartnerLogo:FC<TPartnerType> = ({type}) => {
    switch(type){
        case 'Uzum':
            return <img src={Uzum} alt="Uzum" />;
        case 'Alif':
            return <img src={Alif} alt="Alif" />;
        case 'ZoodPay':
            return <img src={ZoodPay} alt="ZoodPay" />;
        case 'OpenCard':
            return <img src={OpenCard} alt="OpenCard" />;
            case 'InTend':
                return <img src={InTend} alt="InTend" />;
                case 'Click':
                    return <img src={Click} alt="Click" />;
        default:
            return <div>Zet pay</div>
    }
}
