import { FC } from 'react';
import { PartnerDropdown } from '../partner-dropdown';
import { DateFilter } from '../date-filter';
import "./_style.scss";

export const FilterHeader: FC = () => {
    return (
        <>
            <div className="filter">
                <span>+</span>
                <div className="filter_actions">
                    <DateFilter />
                    <PartnerDropdown />
                </div>
            </div>
        </>
    )
}
