import React from 'react';
import {useTranslation} from "react-i18next";

const Header = ({headTitle}: { headTitle: string }) => {
    const {t} = useTranslation();
    return (
        <div className="flex justify-start w-full h-[40px] border-b-[1px] p-4 text-card-foreground text-2xl items-center font-bold">
            {t(headTitle)}
        </div>
    );
};


export default Header;